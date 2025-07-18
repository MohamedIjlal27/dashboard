"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export function ProjectHeader() {
  return (
    <div className="p-6 pb-0">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl font-bold text-[#141416]">Sport Xi Project</h1>
      </div>
      <p className="text-[#777e90] mb-6 text-base">event production</p>
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#777e90]">assigned</span>
          <div className="flex -space-x-1">
            {[1, 2, 3].map((i) => (
              <Avatar key={i} className="w-7 h-7 border-2 border-white">
                <AvatarFallback className="bg-[#353945] text-white text-xs">U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-sm text-[#777e90] font-medium">+2</span>
        </div>
        <Button
          variant="outline"
          className="text-[#b1b5c3] hover:text-[#777e90] border-[#e6e8ec] hover:border-[#d1d5db] flex items-center gap-2 px-4 py-2 h-auto rounded-full bg-white"
        >
          <span className="text-sm">Manage</span>
          <Pencil className="w-4 h-4" />
        </Button>
      </div>
      <div className="border-t border-[#e6e8ec] pt-4">
        <p className="text-xs text-[#b1b5c3]">Last updated on: 04 April, 2022</p>
      </div>
    </div>
  )
} 