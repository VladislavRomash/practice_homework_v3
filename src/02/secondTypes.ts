export type Task = {
    id: number
    title: string
    isDone: boolean
}

export type Filter = 'all' | 'active' | 'completed' | 'three'