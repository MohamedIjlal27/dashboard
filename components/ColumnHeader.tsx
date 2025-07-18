import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal } from "lucide-react"

interface ColumnHeaderProps {
  column: {
    id: string
    title: string
    color: string
  }
  isLast?: boolean
}

export function ColumnHeader({ column, isLast = false }: ColumnHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between p-6 flex-1 ${
        !isLast ? "border-r border-[#e6e8ec]" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        {column.id === "todo" ? (
          <div className="bg-[#e6e8ec] text-[#777e90] px-3 py-1 text-xs font-medium rounded-full">
            {column.title}
          </div>
        ) : (
          <Badge
            className="text-white px-3 py-1 text-xs font-medium rounded-full"
            style={{ backgroundColor: column.color }}
          >
            {column.title}
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-gray-50">
          <Plus className="w-3 h-3 text-[#777e90]" />
        </Button>
        <Button variant="ghost" size="icon" className="w-6 h-6 hover:bg-gray-50">
          <MoreHorizontal className="w-3 h-3 text-[#777e90]" />
        </Button>
      </div>
    </div>
  )
} 