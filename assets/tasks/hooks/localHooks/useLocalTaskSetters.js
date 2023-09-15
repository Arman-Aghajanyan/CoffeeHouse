import { useContext } from "react";
import { TaskLocalContext } from "../../taskLocalContex";

export const useLocalTaskSetters = () => {
  const { setTask, setEditId, setSelected, setSelectOpen } =
    useContext(TaskLocalContext);
  return {
    setSelected,
    setSelectOpen,
    setTask,
    setEditId,
  };
};
