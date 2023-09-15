import React from "react";
import { useDispatch } from "react-redux";
import { handleEditButton } from "../../../../store/Slices/workersEditSlice";

function EditWorker({ name, birthday, role, id, img }) {
  const dispatch = useDispatch();
  const handleWorkerEdit = (id, name, birthday, role, img) => {
    dispatch(handleEditButton({ id, name, birthday, role, img }));
  };

  return (
    <div
      className="editButton delButton workerButtons"
      onClick={() => handleWorkerEdit(id, name, birthday, role, img)}
    >
      Edit
    </div>
  );
}

export default EditWorker;
