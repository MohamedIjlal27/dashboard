import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Task, TaskColumn, taskColumns as initialTaskColumns } from './data'

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Fetch task columns
export const fetchTaskColumns = async (): Promise<TaskColumn[]> => {
  await delay(500) // Simulate network delay
  return initialTaskColumns
}

// Move task between columns
export const moveTask = async ({
  taskId,
  fromColumnId,
  toColumnId,
}: {
  taskId: number
  fromColumnId: string
  toColumnId: string
}): Promise<TaskColumn[]> => {
  await delay(300) // Simulate network delay
  
  // This would typically be an API call
  // For now, we'll return the updated data
  const currentData = await fetchTaskColumns()
  
  const newTaskColumns = [...currentData]
  const fromColumnIndex = newTaskColumns.findIndex(col => col.id === fromColumnId)
  const toColumnIndex = newTaskColumns.findIndex(col => col.id === toColumnId)

  if (fromColumnIndex === -1 || toColumnIndex === -1) {
    throw new Error('Invalid column IDs')
  }

  const fromColumn = newTaskColumns[fromColumnIndex]
  const taskIndex = fromColumn.tasks.findIndex(task => task.id === taskId)

  if (taskIndex === -1) {
    throw new Error('Task not found')
  }

  const [movedTask] = fromColumn.tasks.splice(taskIndex, 1)
  newTaskColumns[toColumnIndex].tasks.push(movedTask)

  return newTaskColumns
}

// React Query hooks
export const useTaskColumns = () => {
  return useQuery({
    queryKey: ['taskColumns'],
    queryFn: fetchTaskColumns,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useMoveTask = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: moveTask,
    onSuccess: (newTaskColumns) => {
      // Update the cache with the new data
      queryClient.setQueryData(['taskColumns'], newTaskColumns)
    },
  })
}

// Search tasks
export const useSearchTasks = (searchQuery: string) => {
  return useQuery({
    queryKey: ['taskColumns', 'search', searchQuery],
    queryFn: async () => {
      const taskColumns = await fetchTaskColumns()
      
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
    enabled: !!searchQuery,
  })
} 