import { useState } from "react";
import { useRoleState } from "./use-role-state";
import { useRoleActions } from "./use-role-actions";
import { handleUpdated } from "../../../store/Slices/editRolesSlice";
import { useDispatch, useSelector } from "react-redux";

export const useRoleLocalProvider = () => {
  const [roleName, setRoleName] = useState("");
  const [editId, setEditId] = useState(null);

  const [roles] = useRoleState();
  const { setRoles } = useRoleActions();
  const editName = useSelector((state) => state.editRoles.editName);
  const editIdRole = useSelector((state) => state.editRoles.editId);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    const editItem = roles.find((i) => i.id === editIdRole);
    const updateItem = roles.map((i) =>
      i.id === editItem.id
        ? (i = { id: i.id, title: editName,})
        : (i = { id: i.id, title: i.title,}),
    );
    setRoles(updateItem);
    dispatch(handleUpdated());
  };


  return {
    roleName,
    setRoleName,
    editId,
    setEditId,
    handleUpdate,
  };
};
