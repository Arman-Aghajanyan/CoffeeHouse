import { useContext } from "react";
import { WorkerLocalContext } from "../../workerLocalContext";

export const useLocalStates = () => {
  const { name, birthday, editId, selectOpen, selected, image } =
    useContext(WorkerLocalContext);
  return {
    name,
    birthday,
    editId,
    selectOpen,
    selected,
    image
  };
};
