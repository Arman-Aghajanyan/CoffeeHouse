import { useContext } from "react";
import { TaskContext } from "../taskContext";

export const useTaskActions = () => {
  const { setTasks, onAddTask, onDelTask } = useContext(TaskContext);
  return {
    setTasks,
    onAddTask,
    onDelTask,
  };
};
