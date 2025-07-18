import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Task, TaskColumn, taskColumns as initialTaskColumns } from './data'

interface TaskStore {
    // State
    taskColumns: TaskColumn[]
    searchQuery: string

    // Actions
    moveTask: (taskId: number, fromColumnId: string, toColumnId: string) => void
    setSearchQuery: (query: string) => void
    getFilteredTasks: () => TaskColumn[]
    resetToInitial: () => void
}

export const useTaskStore = create<TaskStore>()(
    persist(
        (set, get) => ({
            // Initial state
            taskColumns: initialTaskColumns,
            searchQuery: '',

            // Move task between columns
            moveTask: (taskId: number, fromColumnId: string, toColumnId: string) => {
                set((state) => {
                    const newTaskColumns = [...state.taskColumns]

                    // Find source and destination columns
                    const fromColumnIndex = newTaskColumns.findIndex(col => col.id === fromColumnId)
                    const toColumnIndex = newTaskColumns.findIndex(col => col.id === toColumnId)

                    if (fromColumnIndex === -1 || toColumnIndex === -1) return state

                    // Find the task in source column
                    const fromColumn = newTaskColumns[fromColumnIndex]
                    const taskIndex = fromColumn.tasks.findIndex(task => task.id === taskId)

                    if (taskIndex === -1) return state

                    // Remove task from source column
                    const [movedTask] = fromColumn.tasks.splice(taskIndex, 1)

                    // Add task to destination column
                    newTaskColumns[toColumnIndex].tasks.push(movedTask)

                    return { taskColumns: newTaskColumns }
                })
            },

            // Set search query
            setSearchQuery: (query: string) => {
                set({ searchQuery: query })
            },

            // Get filtered tasks based on search query
            getFilteredTasks: () => {
                const { taskColumns, searchQuery } = get()

                if (!searchQuery.trim()) {
                    return taskColumns
                }

                const query = searchQuery.toLowerCase()

                return taskColumns.map(column => ({
                    ...column,
                    tasks: column.tasks.filter(task =>
                        task.title.toLowerCase().includes(query) ||
                        task.category.toLowerCase().includes(query) ||
                        task.assignees.some(assignee =>
                            assignee.name.toLowerCase().includes(query)
                        ) ||
                        task.priority?.toLowerCase().includes(query)
                    )
                }))
            },

            // Reset to initial data
            resetToInitial: () => {
                set({ taskColumns: initialTaskColumns, searchQuery: '' })
            }
        }),
        {
            name: 'task-storage', // localStorage key
            partialize: (state) => ({ taskColumns: state.taskColumns }), // Only persist taskColumns
        }
    )
) 