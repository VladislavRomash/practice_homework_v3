import React, {useState} from 'react';
import {Filter, Task} from './secondTypes';
import {Button} from './Button';

type PropsType = {
    title: string
    tasks: Task[]
    removeTask: (taskId: number) => void
    deleteAllTasks: () => void
}

export function Todolist(props: PropsType): React.ReactElement {

    const {tasks, deleteAllTasks} = props

    let [filter, setFilter] = useState<Filter>('all');

    const getFilterTitle = (value: Filter) => setFilter(value);
    const filteringTasks = (value: Filter, tasks: Task[]) => {
        switch (value) {
            case 'active':
                return tasks.filter(f => !f.isDone)
            case 'completed':
                return tasks.filter(f => f.isDone)
            case 'three':
                return tasks.filter((_, i) => i < 3)
            default:
                return tasks
        }
    }
    const filteredTasks: Task[] = filteringTasks(filter, tasks)

    const removalAllTasks = () => deleteAllTasks()

    const tasksList: React.ReactElement[] = filteredTasks.map(t => <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <Button title={'x'} onclickCallback={() => {
            props.removeTask(t.id)
        }}/>
    </li>)
    const tasksSelection: React.ReactElement[] | React.ReactElement = tasksList.length
        ? tasksList
        : <p>List is empty</p>

    const onClickAll = () => getFilterTitle('all')
    const onClickActive = () => getFilterTitle('active')
    const onClickCompleted = () => getFilterTitle('completed')
    const onClickThree = () => getFilterTitle('three')

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksSelection}
        </ul>
        <div>
            <Button title={'Delete all'} onclickCallback={removalAllTasks}/>
        </div>
        <div>
            <Button title={'All'} onclickCallback={onClickAll}/>
            <Button title={'Active'} onclickCallback={onClickActive}/>
            <Button title={'Completed'} onclickCallback={onClickCompleted}/>
            <Button title={'First three'} onclickCallback={onClickThree}/>
        </div>
    </div>
}