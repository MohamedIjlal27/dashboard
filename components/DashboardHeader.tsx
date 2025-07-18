"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Settings } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-[#e6e8ec] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Left side content if needed */}
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-[#3772ff] hover:bg-[#2c5ce6] text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create new board
          </Button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#777e90]" />
            <Input 
              placeholder="Search tasks..." 
              className="pl-10 w-64 border-[#e6e8ec] focus:border-[#3772ff]" 
            />
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4 text-[#777e90]" />
          </Button>
          <Button variant="ghost" size="icon">
            <div className="w-4 h-4 bg-[#777e90] rounded-sm" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-[#353945] text-white">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
} 