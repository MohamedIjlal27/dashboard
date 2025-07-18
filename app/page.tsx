"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { ProjectHeader } from "@/components/ProjectHeader"
import { KanbanBoard } from "@/components/KanbanBoard"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#ffffff] overflow-hidden w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden w-full min-w-0">
          <DashboardHeader />
          <main className="flex-1 w-full overflow-auto min-w-0">
            <ProjectHeader />
            <KanbanBoard />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
