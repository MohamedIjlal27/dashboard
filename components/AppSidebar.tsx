"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Grid3X3,
  LogOut,
  MessageSquare,
  HelpCircle,
} from "lucide-react"
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

      <SidebarContent className="px-4">
        <SidebarGroup>
          <div className="mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-2 h-auto hover:bg-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#353945] rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-[#b1b5c3] font-normal">workspace</div>
                      <div className="text-sm font-medium text-[#141416]">Root folder</div>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#777e90]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Switch workspace</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <SidebarMenu className="space-y-4">
            <SidebarMenuItem>
              <SidebarMenuButton className="text-[#777e90] hover:text-[#141416] hover:bg-[#f4f5f6] h-12">
                <Grid3X3 className="w-4 h-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu className="space-y-4">
            <SidebarMenuItem>
              <div
                className="bg-[#f8f9fa] border border-[#e6e8ec] rounded-lg p-3 cursor-pointer hover:bg-[#f0f1f2] transition-colors"
                onClick={() => setIsBoardsExpanded(!isBoardsExpanded)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 text-[#3772ff]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-full h-full"
                      >
                        <path d="M3 7V5C3 3.89543 3.89543 3 5 3H9L11 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z" />
                      </svg>
                    </div>
                    <span className="text-[#3772ff] font-medium text-base">Boards</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3772ff] transition-transform duration-200 ${
                      isBoardsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </SidebarMenuItem>

            {isBoardsExpanded && (
              <SidebarMenuItem>
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-3">
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-[#b1b5c3] hover:text-[#141416] hover:bg-[#f4f5f6] h-10 justify-start pl-4">
                        <ChevronDown className="w-4 h-4 -rotate-90 text-[#b1b5c3]" />
                        <span className="text-base ml-2">Create routes</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-[#b1b5c3] hover:text-[#141416] hover:bg-[#f4f5f6] h-10 justify-start pl-4">
                        <ChevronDown className="w-4 h-4 -rotate-90 text-[#b1b5c3]" />
                        <span className="text-base ml-2">Delopment React App</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-[#3772ff] bg-transparent hover:bg-[#f4f5f6] h-10 justify-start pl-4">
                        <ChevronDown className="w-4 h-4 -rotate-90 text-[#3772ff]" />
                        <span className="text-base font-medium ml-2">Sport Xi Project</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-[#b1b5c3] hover:text-[#141416] hover:bg-[#f4f5f6] h-10 justify-start pl-4">
                        <ChevronDown className="w-4 h-4 -rotate-90 text-[#b1b5c3]" />
                        <span className="text-base ml-2">Wordpress theme</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu className="space-y-4">
            <SidebarMenuItem>
              <SidebarMenuButton className="text-[#777e90] hover:text-[#141416] hover:bg-[#f4f5f6] h-12 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-[#777e90]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-full h-full"
                    >
                      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                    </svg>
                  </div>
                  <span className="text-base">Messages</span>
                </div>
                <Badge className="bg-[#ff5c00] text-white text-sm px-2 py-1 h-6 min-w-6 rounded-full font-medium">
                  3
                </Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-[#777e90] hover:text-[#141416] hover:bg-[#f4f5f6] h-12">
                <div className="w-5 h-5 text-[#777e90]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span className="text-base ml-3">Calendar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="text-[#777e90] hover:text-[#141416] hover:bg-[#f4f5f6] h-12">
                <div className="w-5 h-5 text-[#777e90]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span className="text-base ml-3">Team members</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

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