import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Link2,
  MessageSquare,
  MoreHorizontal,
  Eye,
  AlertTriangle,
  Calendar,
} from "lucide-react"
import { Task } from "@/lib/data"

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="mb-3 border border-[#e6e8ec] hover:shadow-sm transition-shadow bg-white">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: task.categoryColor }} />
            <span className="text-xs text-[#777e90]">{task.category}</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-[#777e90]" />
        </div>

        <h3 className="font-medium text-[#141416] mb-3 text-sm">{task.title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-1">
            {task.assignees?.slice(0, 3).map((assignee, index) => (
              <Avatar key={index} className="w-6 h-6 border-2 border-white">
                <AvatarFallback className="bg-[#353945] text-white text-xs">{assignee.name[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          {task.additionalUsers && <span className="text-xs text-[#777e90] font-medium">+{task.additionalUsers}</span>}
          {task.priority && <span className="text-xs text-[#777e90] ml-auto">{task.priority}</span>}
        </div>

        {task.hasImage && (
          <div className="w-full h-24 bg-[#353945] rounded-md mb-3 flex items-center justify-center">
            <Eye className="w-4 h-4 text-[#777e90]" />
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-[#777e90]">
          <div className="flex items-center gap-3">
            {task.stats?.links && (
              <div className="flex items-center gap-1">
                <Link2 className="w-3 h-3" />
                <span>{task.stats.links}</span>
              </div>
            )}
            {task.stats?.comments && (
              <div className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                <span>{task.stats.comments}</span>
              </div>
            )}
            {task.reports && (
              <div className="flex items-center gap-1 text-[#f90430]">
                <AlertTriangle className="w-3 h-3" />
                <span>{task.reports} Reports</span>
              </div>
            )}
            {task.hasStream && (
              <div className="flex items-center gap-1 text-[#3772ff]">
                <span>Stream</span>
              </div>
            )}
            {task.hasGroupCall && (
              <div className="flex items-center gap-1 text-[#3772ff]">
                <span>Group Call</span>
              </div>
            )}
          </div>
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Due: {task.dueDate}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 