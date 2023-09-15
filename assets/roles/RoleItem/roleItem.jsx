import React from "react";
import { useRoleState } from "../hooks/use-role-state";
import EditDelButtons from "./editDelButtons";

function RoleItem() {
  const [roles] = useRoleState();
  return (
    <div className="employeeManagement">
      {roles.length === 0 ? (
        <div className="Empty">It's empty</div>
      ) : (
        roles.map((i) => (
          <div key={i.id} className="roleItem flex">
            <div className="itemRoleName">
              <div className="itemTitle">{i.title}</div>
            </div>
            <EditDelButtons id={i.id} title={i.title}  />
          </div>
        ))
      )}
    </div>
  );
}

export default RoleItem;
