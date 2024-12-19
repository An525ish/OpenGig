import Task from "./Task"

const TaskList = ({ tasks, onTaskUpdated }) => {

    const activeTasks = tasks.filter((task) => task.status !== "Completed");

    return (
        <div className="">
            <h2>Active Tasks</h2>
            {
                activeTasks.map((task) => (<Task key={task._id} task={task} onTaskUpdated={onTaskUpdated} />))
            }
        </div>
    )
}

export default TaskList
