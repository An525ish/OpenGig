import { updateTask } from "@/services/api";
import { useEffect, useState } from "react";

const Task = ({ task, onTaskUpdated }) => {
    const [elapsedTime, setElapsedTime] = useState(task.elapsedTime);

    useEffect(() => {
        let interval;
        if (task.status === "Running") {
            interval = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [task]);




    const handleStartPause = async () => {
        const newStatus = task.status === "Running" ? "Paused" : "Running";
        try {
            const res = await updateTask(task._id, { status: newStatus });
            onTaskUpdated(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleComplete = async () => {
        try {
            const res = await updateTask(task._id, { status: "Completed" });
            onTaskUpdated(res.data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="p-4 rounded mb-3">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-semibold">{task.name}</h3>
                    <p className="text-sm">Elapsed : {Math.floor(elapsedTime)} seconds / Estimated : {task.estimatedTime} min</p>
                    <p className="text-sm">Status : {task.status}</p>
                </div>

                <div>
                    <button
                        onClick={handleStartPause}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        {task.status === "Running" ? "Pause" : "Start"}
                    </button>
                    <button
                        onClick={handleComplete}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                        Complete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task