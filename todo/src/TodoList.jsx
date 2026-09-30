import { useState } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState(["eat breakfast", "Take a shower"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="to-do-list">
        <h1>TO DO LIST</h1>

        <div>
          <input
            type="text"
            placeholder="Enter your Task"
            value={newTask}
            onChange={handleInputChange}
          />

          <button onClick={addTask} className="add-btn">
            Submit
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                delete
              </button>
              <button className="move-btn" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>
              <button className="move-btn" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
