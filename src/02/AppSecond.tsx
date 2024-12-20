import React, {useState} from 'react';
import './AppSecond.css';
import {Todolist} from './Todolist';
import {Task} from './secondTypes';

//Hi guys!
//1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
//Clicking the button removes all tasks
//2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
//3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work


export function AppSecond(): React.ReactElement {

    let [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]);

    const removeTask = (id: number) => setTasks(tasks.filter(t => t.id != id))

    const deleteAllTasks = () => setTasks([])

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
                      deleteAllTasks={deleteAllTasks}
            />
        </div>
    );
}