"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  Grid3X3,
  Link2,
  LogOut,
  MessageSquare,
  Plus,
  Search,
  Settings,
  HelpCircle,
  MoreHorizontal,
  Eye,
  AlertTriangle,
  Calendar,
  Pencil,
} from "lucide-react"
import { useState } from "react"

const taskColumns = [
  {
    id: "todo",
    title: "To Do",
    color: "#e6e8ec",
    tasks: [
      {
        id: 1,
        title: "User Inerview",
        category: "Research",
        categoryColor: "#aee753",
        assignees: [{ name: "User", avatar: "" }],
        stats: { links: 2, comments: 2 },
        dueDate: "Tomorrow",
        priority: "Low",
      },
      {
        id: 2,
        title: "Design System",
        category: "Design",
        categoryColor: "#f90430",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
        ],
        stats: { links: 3, comments: 8 },
        reports: 2,
        priority: "Medium",
      },
      {
        id: 3,
        title: "Speech",
        category: "Other",
        categoryColor: "#777e90",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
          { name: "User3", avatar: "" },
        ],
        additionalUsers: 2,
        stats: { links: 1, comments: 3 },
        hasStream: true,
        priority: "Low",
      },
      {
        id: 4,
        title: "Wireframe",
        category: "Design",
        categoryColor: "#f90430",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
          { name: "User3", avatar: "" },
        ],
        additionalUsers: 2,
        hasImage: true,
        priority: "High",
      },
    ],
  },
  {
    id: "progress",
    title: "In Progress",
    color: "#ffa800",
    tasks: [
      {
        id: 5,
        title: "UI Design",
        category: "Design",
        categoryColor: "#f90430",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
        ],
        stats: { links: 2, comments: 2 },
        dueDate: "Tomorrow",
        priority: "High",
      },
      {
        id: 6,
        title: "Check Clients Feedback",
        category: "Feedback",
        categoryColor: "#3772ff",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
          { name: "User3", avatar: "" },
        ],
        additionalUsers: 2,
        stats: { comments: 8 },
        dueDate: "22 April, 2022",
        hasImage: true,
        priority: "Low",
      },
      {
        id: 7,
        title: "Copyright",
        category: "Presentation",
        categoryColor: "#ff5c00",
        assignees: [{ name: "User", avatar: "" }],
        stats: { comments: 4 },
        dueDate: "22 April, 2022",
        priority: "Low",
      },
      {
        id: 8,
        title: "Filter sorting",
        category: "UX Research",
        categoryColor: "#ffa800",
        assignees: [{ name: "User", avatar: "" }],
      },
    ],
  },
  {
    id: "approved",
    title: "Approved",
    color: "#aee753",
    tasks: [
      {
        id: 9,
        title: "Prototype",
        category: "Research",
        categoryColor: "#aee753",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
          { name: "User3", avatar: "" },
        ],
        additionalUsers: 2,
        stats: { links: 35, comments: 243 },
        priority: "Low",
      },
      {
        id: 10,
        title: "Detail Page",
        category: "Design",
        categoryColor: "#f90430",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
          { name: "User3", avatar: "" },
        ],
        additionalUsers: 2,
        stats: { links: 6, comments: 28 },
        hasImage: true,
        priority: "Low",
      },
      {
        id: 11,
        title: "Animation preloaders",
        category: "Interface",
        categoryColor: "#777e90",
        assignees: [{ name: "User", avatar: "" }],
        stats: { links: 4, comments: 9 },
        priority: "High",
      },
      {
        id: 12,
        title: "Sorting category",
        category: "UX Research",
        categoryColor: "#ffa800",
        assignees: [{ name: "User", avatar: "" }],
      },
    ],
  },
  {
    id: "reject",
    title: "Reject",
    color: "#f90430",
    tasks: [
      {
        id: 13,
        title: "Group Managment",
        category: "Other",
        categoryColor: "#777e90",
        assignees: [{ name: "User", avatar: "" }],
        stats: { comments: 329 },
        hasGroupCall: true,
        priority: "Low",
      },
      {
        id: 14,
        title: "Design System",
        category: "Design",
        categoryColor: "#f90430",
        assignees: [{ name: "User", avatar: "" }],
        stats: { links: 3, comments: 8 },
        reports: 2,
        priority: "Low",
      },
      {
        id: 15,
        title: "Slider controls",
        category: "Interface",
        categoryColor: "#777e90",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
        ],
        stats: { links: 8, comments: 31 },
        priority: "Low",
      },
      {
        id: 16,
        title: "Slider controls",
        category: "Design",
        categoryColor: "#f90430",
        assignees: [
          { name: "User", avatar: "" },
          { name: "User2", avatar: "" },
          { name: "User3", avatar: "" },
        ],
        additionalUsers: 2,
        hasImage: true,
        priority: "Low",
      },
    ],
  },
]


   
export default function TaskCard({ task }: { task: any }) {
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
            {task.assignees?.slice(0, 3).map((assignee: any, index: number) => (
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


