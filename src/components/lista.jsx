import React, { useState } from 'react';

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
          <h1>Lista de Tareas</h1> {/* Agregado: Título de la lista de tareas */}
          {taskList.map((task, index) => (
              <div key={index} className={task.completed ? 'completed-task' : ''}>
                  <span>{task.task}</span>
                  <span>{task.hora}</span> {/* Agregado: Mostrar la hora de la tarea */}
                  <span>{task.completed ? 'Completed' : 'Incomplete'}</span>
                  <button onClick={() => toggleTaskCompletion(index)}>cambiar estado</button>
              </div>
          ))}
      </div>
  );
}

export default Lista;