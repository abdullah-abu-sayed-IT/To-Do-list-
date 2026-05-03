import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task || !time) return;

    const newTask = {
      text: task,
      time: time,
      id: Date.now(),
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setTime("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>📚 Study Scheduler</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task (e.g. Math Study)"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span>
              📌 {t.text} — ⏰ {t.time}
            </span>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
