import { useEffect, useState } from "react";
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/api";

function App() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
      console.log(res.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);


  const handleTaskCreated = (task) => {
    setTasks([...tasks, task]);
  }

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
  }


  return (
    <>
      <div className="container mx-auto p-4">
        <h1>Task Timer</h1>

        <TaskForm onTaskCreated={handleTaskCreated} />
        <TaskList tasks={tasks} onTaskUpdated={handleTaskUpdated} />
      </div>
    </>
  );
}

export default App
