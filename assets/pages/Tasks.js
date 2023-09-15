import React from "react";
import WorkersLocalProvider from "../workers/workersLocalProvider";
import TaskLocalProvider from "../tasks/taskLocalProvider";
import Task from "../tasks/Task";

function Tasks(props) {
  return (
    <div>
        <WorkersLocalProvider>
          <TaskLocalProvider>
            <Task />
          </TaskLocalProvider>
        </WorkersLocalProvider>
    </div>
  );
}

export default Tasks;
