"use client"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Grid3X3, HelpCircle, LogOut } from "lucide-react"
import { useState } from "react"

export function AppSidebar() {
  const [isBoardsExpanded, setIsBoardsExpanded] = useState(true)
  
  return (
    <Sidebar className="border-r border-[#e6e8ec]" collapsible="none">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3772ff] rounded-lg flex items-center justify-center">
            <Grid3X3 className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#141416]">Board</span>
          <span className="text-[#3772ff] font-semibold">App</span>
        </div>
      </SidebarHeader>

      <SidebarFooter className="p-4 mt-auto">
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton className="text-[#777e90] hover:text-[#141416] hover:bg-[#f4f5f6] h-10">
              <HelpCircle className="w-4 h-4" />
              <span>Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Button className="w-full bg-[#353945] hover:bg-[#2a2d35] text-white h-10 justify-start px-3">
              <LogOut className="w-4 h-4 mr-3" />
              <span>Logout</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
} 