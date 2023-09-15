import React from "react";
import { useDispatch } from "react-redux";
import { handleEditTask } from "../../../../store/Slices/editTasksSlice";

function EditTask({ id, worker, title }) {
  const dispatch = useDispatch();
  const handleEdit = (id, worker, title) => {
    dispatch(handleEditTask({ id, worker, title }));
  };
  return (
    <div
      className="editButton delButton workerButtons"
      onClick={() => handleEdit(id, worker, title)}
    >
      Edit
    </div>
  );
}

export default EditTask;
