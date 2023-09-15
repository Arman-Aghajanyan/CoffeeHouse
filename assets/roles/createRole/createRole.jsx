import React, { useContext } from "react";
import { useRoleActions } from "../hooks/use-role-actions";
import { RoleLocalContext } from "../roleLocalContext";
import { NavLink } from "react-router-dom";

function CreateRole() {
  const { onAddRole } = useRoleActions();
  const { setRoleName, roleName, } =
    useContext(RoleLocalContext);
  const handleChange = (e) => {
    setRoleName(e.target.value);
  };
  const handleCreateRole = () => {
    if (roleName === "") return;
    onAddRole({ title: roleName});
    setRoleName("");
  };

  return (
    <div className="paddings-for-items">
      <div className="roleAdd">Create Role</div>
      <div className="flex create_role">

        <input
          type="text"
          value={roleName}
          onChange={handleChange}
          placeholder="Create a new Role"
          className="roleInput"
        />
        <div className="updAddButt createButton" onClick={handleCreateRole}>
          Create
        </div>
      </div>
      <div className="CreateRole backToPages">
        <NavLink to="/roles" className="createRoleColor">
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default CreateRole;
