import { createTask } from "@/services/api";
import { useState } from "react";

const TaskForm = () => {
    const [name, setName] = useState("");
    const [estimatedTime, setEstimatedTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log({ name, estimatedTime })
            await createTask({ name, estimatedTime });
            setName("");
            setEstimatedTime("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div>
                <label htmlFor="name">Task Name</label>
                <input
                    type="text"
                    id="name"
                    className="text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="estimatedTime">Estimated Time</label>
                <input
                    type="number"
                    id="estimatedTime"
                    className="text-black"
                    value={estimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
                Add Task
            </button>
        </form>
    )
}

export default TaskForm
