import React from "react";
import { useRoleActions } from "../../hooks/use-role-actions";

function DeleteRole({id}) {
  const { onDelRole } = useRoleActions();
  const handleDeleteRole = (id) => onDelRole({ id });

  return (
    <>
      <div  className="deleteRole delButton" onClick={() => handleDeleteRole(id)}>Delete</div>
    </>
  );
}

export default DeleteRole;
