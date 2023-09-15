import { useState } from "react";
import { useTaskState } from "../useTaskState";
import { useTaskActions } from "../useTaskActions";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdated } from "../../../../store/Slices/editTasksSlice";

function UseLocalTaskProvider() {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);
  const [selected, setSelected] = useState("");
  const [selectOpen, setSelectOpen] = useState(null);
  const editIdTask = useSelector((state) => state.editTasks.editId);
  const editWorker = useSelector((state) => state.editTasks.editWorker);
  const editTask = useSelector((state) => state.editTasks.editTask);
  const [tasks] = useTaskState();
  const { setTasks } = useTaskActions();
  const dispatch = useDispatch();
  const handleUpdateItem = () => {
    const editItem = tasks.find((i) => i.id === editIdTask);
    const updateItem = tasks.map((i) =>
      i.id === editItem.id
        ? (i = { id: i.id, title: editTask, worker: editWorker })
        : (i = {
            id: i.id,
            title: i.title,
            worker: i.worker,
          }),
    );
    setTasks(updateItem);
    dispatch(handleUpdated());
  };

  return {
    task,
    selectOpen,
    setSelectOpen,
    setSelected,
    selected,
    editId,
    setEditId,
    setTask,
    handleUpdateItem,
  };
}

export default UseLocalTaskProvider;
