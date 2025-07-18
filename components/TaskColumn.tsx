import { TaskCard } from "./TaskCard"
import { TaskColumn as TaskColumnType } from "@/lib/data"

interface TaskColumnProps {
  column: TaskColumnType
  isLast?: boolean
}

export function TaskColumn({ column, isLast = false }: TaskColumnProps) {
  return (
    <div
      className={`bg-[#f4f5f6] p-6 flex flex-col min-h-0 flex-1 ${
        !isLast ? "border-r border-[#e6e8ec]" : ""
      }`}
    >
      <div className="flex-1 overflow-y-auto">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
} 