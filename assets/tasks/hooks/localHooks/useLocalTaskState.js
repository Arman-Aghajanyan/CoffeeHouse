import { useContext } from "react";
import { TaskLocalContext } from "../../taskLocalContex";

export const useLocalTaskState = () => {
  const { task, editId, selected, selectOpen } = useContext(TaskLocalContext);
  return {
    task,
    editId,
    selected,
    selectOpen,
  };
};
