export type Task = {
    taskId: number
    title: string
    isDone: boolean
}

export type Data = {
    title: string
    tasks: Task[]
    students: string[]
}