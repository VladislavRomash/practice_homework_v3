import React from 'react';
import {Data} from './typesFirstType';

type TaskProps = {
    data: Data
}

export const Tasks = ({data}: TaskProps) => {

    const {title, tasks, students} = data

    return (
        <div>
            <h2>{title}</h2>
            <h3>
                {students[Math.floor(Math.random() * students.length)]}
            </h3>
            <div>
                {
                    tasks.map(m => {
                        return (
                            <div key={m.taskId}>
                                <input type={'checkbox'}
                                       checked={m.isDone}/>
                                <span>{m.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};