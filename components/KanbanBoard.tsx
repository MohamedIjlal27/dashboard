"use client"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Plus } from "lucide-react"
import { TaskCard } from "./TaskCard"
import { TaskColumn } from "@/lib/data"

interface KanbanBoardProps {
  taskColumns: TaskColumn[]
}

export function KanbanBoard({ taskColumns }: KanbanBoardProps) {
  return (
    <div className="h-full min-h-0 flex-1 w-full">
      <div className="bg-white border border-[#e6e8ec] rounded-lg h-full min-h-0 flex flex-col w-full max-w-none" style={{ width: 'calc(100vw - 16rem)' }}>
        {/* Table Header Row */}
        <div className="flex border-b border-[#e6e8ec]">
          {taskColumns.map((column, index) => (
            <div
              key={column.id}
              className={`flex items-center justify-between p-6 flex-1 ${
                index < taskColumns.length - 1 ? "border-r border-[#e6e8ec]" : ""
              }`}
            >
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-gray-50">
                  <Plus className="w-3 h-3 text-[#777e90]" />
                </Button>
                <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-gray-50">
                  <MoreHorizontal className="w-3 h-3 text-[#777e90]" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Column Content Areas */}
        <div className="flex flex-1 min-h-0">
          {taskColumns.map((column, index) => (
            <div
              key={column.id}
              className={`bg-[#f4f5f6] p-6 flex flex-col min-h-0 flex-1 ${
                index < taskColumns.length - 1 ? "border-r border-[#e6e8ec]" : ""
              }`}
            >
              <div className="flex-1 overflow-y-auto">
                {column.tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 