import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks()
  }, [])


  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))
      }
    </div>
  )
}

export default TasksPage