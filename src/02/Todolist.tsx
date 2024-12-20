import React from 'react';
import {Filter, Task} from './secondTypes';
import {Button} from './Button';

type PropsType = {
    title: string
    tasks: Task[]
    removeTask: (taskId: number) => void
    changeFilter: (value: Filter) => void
    deleteAllTasks: () => void
}

export function Todolist(props: PropsType): React.ReactElement {

    const {tasks, changeFilter, deleteAllTasks} = props

    const removalAllTasks = () => deleteAllTasks()

    const tasksList: React.ReactElement[] = tasks.map(t => <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <Button title={'x'} onclickCallback={() => {
            props.removeTask(t.id)
        }}/>
    </li>)
    const tasksSelection: React.ReactElement[] | React.ReactElement = tasksList.length
        ? tasksList
        : <p>List is empty</p>

    const onClickAll = () => changeFilter('all')
    const onClickActive = () => changeFilter('active')
    const onClickCompleted = () => changeFilter('completed')
    const onClickThree = () => changeFilter('three')

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