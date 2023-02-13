import React, { useState } from "react";
import useList from "../../hooks/useList";

const TaskList = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };

  const handleImputChange = (event) => {
    setNewTask(event.target.value);
  };

  const ordenarLista = (event) =>{
    event.preventDefault()
    tasks.sortElement()
  } 

  return (
    <div>
      <h1>TaskList</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTask}
          onChange={handleImputChange}
          placeholder="newTask"
          type="text"
        ></input>
        <button type="submit">Create Task</button>
        <button onClick={ordenarLista} type="button">Ordenar Lista</button>
      </form>
      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onClick={() => tasks.remove(index)}                
              ></input>
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
