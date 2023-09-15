import React from "react";
import RoleItem from "./RoleItem/roleItem";
import { NavLink } from "react-router-dom";
import EditingRoles from "./RoleItem/EditingRoles";

function Role() {
  return (
    <div className="paddings-for-items">
      <NavLink to="/roles/create" className="createRoleColor">
        <div className="CreateRole">Create Role</div>
      </NavLink>
      <EditingRoles />
      <div className="createRole">
        <div className="gaga">
          <RoleItem />
        </div>
      </div>
    </div>
  );
}

export default Role;
