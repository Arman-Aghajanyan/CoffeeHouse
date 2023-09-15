import React from "react";
import CreateTask from "./createTask";
import WorkersLocalProvider from "../../workers/workersLocalProvider";
import TaskLocalProvider from "../taskLocalProvider";
import RoleLocalProvider from "../../roles/RoleLocalProvider";

function InLocalTaskCreate(props) {
  return (
    <div>
      <RoleLocalProvider>
        <WorkersLocalProvider>
          <TaskLocalProvider>
            <CreateTask />
          </TaskLocalProvider>
        </WorkersLocalProvider>
      </RoleLocalProvider>
    </div>
  );
}

export default InLocalTaskCreate;
