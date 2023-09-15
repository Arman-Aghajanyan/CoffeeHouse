import React from "react";
import { useTaskActions } from "../../hooks/useTaskActions";

function TaskDelete({ id }) {
  const { onDelTask } = useTaskActions();

  const handleDelete = (id) => {
    onDelTask({ id });
  };

  return (
    <div className="delButton workerButtons" onClick={() => handleDelete(id)}>
      Delete
    </div>
  );
}

export default TaskDelete;
