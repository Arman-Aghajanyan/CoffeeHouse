import React from "react";
import DeleteWorker from "./buttons/DeleteWorker";
import EditWorker from "./buttons/editWorker";

function EditDelButtons({id, name, birthday, role, img}) {
  return (
    <div className="flex">
      <DeleteWorker id={id} />
      <EditWorker id={id} name={name} birthday={birthday} role={role} img={img} />
    </div>
  );
}

export default EditDelButtons;
