import React from "react";
import RoleLocalProvider from "../RoleLocalProvider";
import CreateRole from "./createRole";

function InLocalCreateRole(props) {
  return (
    <div>
      <RoleLocalProvider>
        <CreateRole />
      </RoleLocalProvider>
    </div>
  );
}

export default InLocalCreateRole;
