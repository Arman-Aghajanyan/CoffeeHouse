import React from "react";
import TaskDelete from "./buttons/TaskDelete";
import EditTask from "./buttons/editTask";

function EditDelButtons({ id, worker, title }) {
  return (
    <div className="flex">
      <TaskDelete id={id} />
      <EditTask id={id} worker={worker} title={title} />
    </div>
  );
}

export default EditDelButtons;
