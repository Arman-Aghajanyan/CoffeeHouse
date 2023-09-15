import { useContext } from "react";
import { WorkerLocalContext } from "../../workerLocalContext";

export const useLocalSetters = () => {
  const { setName, setBirthday, setEditId, setSelected, setSelectOpen, setImage } =
    useContext(WorkerLocalContext);
  return {
    setName,
    setBirthday,
    setEditId,
    setSelected,
    setSelectOpen,
    setImage
  };
};
