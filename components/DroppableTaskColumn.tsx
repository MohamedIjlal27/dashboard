"use client"
import { useDroppable } from "@dnd-kit/core"
import { DraggableTaskCard } from "./DraggableTaskCard"
import { TaskColumn } from "@/lib/data"

interface DroppableTaskColumnProps {
  column: TaskColumn
  isLast: boolean
}

export function DroppableTaskColumn({ column, isLast }: DroppableTaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `column-${column.id}`,
    data: {
      type: 'column',
      columnId: column.id,
    },
  })

  return (
    <div
      ref={setNodeRef}
      className={`bg-[#f4f5f6] p-6 flex flex-col flex-1 min-w-0 kanban-column ${
        !isLast ? "border-r border-[#e6e8ec]" : ""
      } ${isOver ? "bg-blue-50" : ""}`}
    >
      <div className="flex-1 min-w-0">
        {column.tasks.map((task) => (
          <DraggableTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
} 