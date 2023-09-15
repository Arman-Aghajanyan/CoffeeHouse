import React from "react";
import CreateWorker from "./createWorker";
import RoleLocalProvider from "../../roles/RoleLocalProvider";
import WorkersLocalProvider from "../workersLocalProvider";

function InLocalWorkerCreate(props) {
  return (
    <RoleLocalProvider>
      <WorkersLocalProvider>
        <CreateWorker />
      </WorkersLocalProvider>
    </RoleLocalProvider>
  );
}

export default InLocalWorkerCreate;
