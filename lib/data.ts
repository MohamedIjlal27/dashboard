export interface Task {
    id: number
    title: string
    category: string
    categoryColor: string
    assignees: Array<{ name: string; avatar: string }>
    stats?: { links?: number; comments?: number }
    reports?: number
    dueDate?: string
    priority?: string
    additionalUsers?: number
    hasImage?: boolean
    hasStream?: boolean
    hasGroupCall?: boolean
}

export interface TaskColumn {
    id: string
    title: string
    color: string
    tasks: Task[]
}

export const taskColumns: TaskColumn[] = [
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