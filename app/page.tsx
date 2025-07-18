"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { DashboardHeader } from "@/components/DashboardHeader"
import { ProjectHeader } from "@/components/ProjectHeader"
import { KanbanBoard } from "@/components/KanbanBoard"
import { taskColumns } from "@/lib/data"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#ffffff]">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 w-full">
            <ProjectHeader />
            <KanbanBoard taskColumns={taskColumns} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
