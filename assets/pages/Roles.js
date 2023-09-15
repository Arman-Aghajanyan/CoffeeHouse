import React from "react";
import Role from "../roles/Role";
import RoleLocalProvider from "../roles/RoleLocalProvider";

function Roles() {
  return (
    <div>
      <RoleLocalProvider>
        <Role />
      </RoleLocalProvider>
    </div>
  );
}

export default Roles;
