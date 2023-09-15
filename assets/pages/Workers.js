import React from "react";
import RoleLocalProvider from "../roles/RoleLocalProvider";
import WorkersLocalProvider from "../workers/workersLocalProvider";
import Worker from "../workers/Worker";

function Workers(props) {
  return (
    <div>
      <RoleLocalProvider>
        <WorkersLocalProvider>
            <Worker />
        </WorkersLocalProvider>
      </RoleLocalProvider>
    </div>
  );
}

export default Workers;
