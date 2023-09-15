import { useState } from "react";
import { useWorkerState } from "../use-worker-state";
import { useWorkerActions } from "../use-worker-actions";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdated } from "../../../../store/Slices/workersEditSlice";

export const useWorkerLocalProvider = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [editId, setEditId] = useState(null);
  const [image, setImage] = useState("");

  const [workers] = useWorkerState();
  const { setWorkers } = useWorkerActions();
  const [selected, setSelected] = useState("");
  const [selectOpen, setSelectOpen] = useState(null);
  const editWorkerId = useSelector((state) => state.editWorkers.editId);
  const editWorkerName = useSelector(
    (state) => state.editWorkers.editWorkerName,
  );
  const editWorkerBirthday = useSelector(
    (state) => state.editWorkers.editWorkerBirthday,
  );
  const editWorkerRole = useSelector(
    (state) => state.editWorkers.editWorkerRole,
  );
    const editImg = useSelector(
        (state) => state.editWorkers.editImg,
    );
  const dispatch = useDispatch();

  const handleUpdateItem = () => {
    const editItem = workers.find((i) => i.id === editWorkerId);
    const updateItem = workers.map((i) =>
      i.id === editItem.id
        ? (i = {
            id: i.id,
            name: editWorkerName,
            birthday: editWorkerBirthday,
            role: editWorkerRole,
            img: editImg,
          })
        : (i = {
            id: i.id,
            name: i.name,
            birthday: i.birthday,
            role: i.role,
            img: i.img,
          }),
    );
    setWorkers(updateItem);
    dispatch(handleUpdated());
  };

  const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });

  return {
    name,
    setName,
    birthday,
    setBirthday,
    editId,
    setEditId,
    selected,
    setSelected,
    selectOpen,
    setSelectOpen,
    handleUpdateItem,
    image,
    setImage,
    toBase64
  };
};
