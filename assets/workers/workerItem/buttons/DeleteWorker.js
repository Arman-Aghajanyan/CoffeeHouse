import React from "react";
import { useWorkerActions } from "../../hooks/use-worker-actions";

function DeleteWorker({ id }) {
  const { onDelWorker } = useWorkerActions();

  const handleDelete = (id) => {
    onDelWorker({ id });
  };

  return (
    <>
      <div  className="delButton workerButtons" onClick={() => handleDelete(id)}>Delete</div>
    </>
  );
}

export default DeleteWorker;
