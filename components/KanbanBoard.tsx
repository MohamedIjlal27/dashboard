"use client"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { useState } from "react"
import { ColumnHeader } from "./ColumnHeader"
import { DroppableTaskColumn } from "./DroppableTaskColumn"
import { TaskCard } from "./TaskCard"
import { TaskColumn } from "@/lib/data"
import { useTaskStore } from "@/lib/store"

interface KanbanBoardProps {
  taskColumns?: TaskColumn[]
}

export function KanbanBoard({ taskColumns }: KanbanBoardProps) {
  const { moveTask, getFilteredTasks, taskColumns: storeTaskColumns } = useTaskStore()
  const [activeTask, setActiveTask] = useState<any>(null)
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const filteredColumns = getFilteredTasks()

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    console.log('Drag start:', active.id)
    
    const taskId = parseInt(active.id.toString().replace('task-', ''))
    const task = storeTaskColumns
      .flatMap(col => col.tasks)
      .find(t => t.id === taskId)
    
    if (task) {
      setActiveTask(task)
      console.log('Active task:', task)
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    console.log('Drag end:', { active: active.id, over: over?.id })
    
    if (!over) {
      setActiveTask(null)
      return
    }

    const taskId = parseInt(active.id.toString().replace('task-', ''))
    const fromColumnId = storeTaskColumns.find(col => col.tasks.some(t => t.id === taskId))?.id
    const toColumnId = over.id.toString().replace('column-', '')
    
    console.log('Moving task:', { taskId, fromColumnId, toColumnId })
    
    if (fromColumnId && toColumnId && fromColumnId !== toColumnId) {
      console.log('Executing moveTask')
      moveTask(taskId, fromColumnId, toColumnId)
    }
    
    setActiveTask(null)
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="h-full w-full min-w-0 bg-red-100">
        <div className="bg-white border border-[#e6e8ec] rounded-lg h-full flex flex-col w-full min-w-0 kanban-board">
          {/* Table Header Row */}
          <div className="flex border-b border-[#e6e8ec] kanban-columns w-full min-w-0">
            {filteredColumns.map((column, index) => (
              <ColumnHeader
                key={column.id}
                column={column}
                isLast={index === filteredColumns.length - 1}
              />
            ))}
          </div>

          {/* Column Content Areas */}
          <div className="flex flex-1 kanban-columns w-full min-w-0">
            {filteredColumns.map((column, index) => (
              <DroppableTaskColumn
                key={column.id}
                column={column}
                isLast={index === filteredColumns.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
      
      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} /> : null}
      </DragOverlay>
    </DndContext>
  )
} 