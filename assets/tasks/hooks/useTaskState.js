import { useContext } from "react";
import { TaskContext } from "../taskContext";

export const useTaskState = () => {
  const { tasks } = useContext(TaskContext);
  return [tasks];
};
