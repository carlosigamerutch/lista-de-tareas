import React, { useState } from 'react';
const completedData = require('../completed.json');

function Lista() {
    const [taskList, setTaskList] = useState([
        { task: 'comprar frijoles', hora: '5PM', completed: false },
        { task: 'cenar temprano', hora: '7PM', completed: true },
        { task: 'dormir temprano', hora: '8-9PM', completed: false },
    ]);

    const toggleTaskCompletion = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].completed = !updatedTaskList[index].completed;
        setTaskList(updatedTaskList);
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            {taskList.map((task, index) => (
                <div key={index} className={task.completed ? 'completed-task' : ''}>
                    <span>{task.task}</span>
                    <span>{task.hora}</span>
                    <span>{task.completed ? 'Completed' : 'Incomplete'}</span>
                    <button onClick={() => toggleTaskCompletion(index)}>cambiar estado</button>
                </div>
            ))}
            <h2>Contenido de completed.json:</h2>
            {completedData.map((item, index) => (
                <div key={index}>
                    <span>{item.task}</span>
                    <span>{item.hora}</span>
                    <span>{item.completed ? 'Completed' : 'Incomplete'}</span>
                </div>
            ))}
        </div>
    );
}

export default Lista;