import { useState } from "react";
import { ROLES_STORAGE_KEY } from "../roleStorageKey";
import { createRole } from "../createRole";

export const useRoleProvider = () => {
  const [roles, _setRoles] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(ROLES_STORAGE_KEY));
    } catch (error) {
      return [];
    }
  });

  const setRoles = (roles) => {
    localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(roles));
    _setRoles(roles);
  };

  const onAddRole = ({ title }) => {
    setRoles(roles.concat(createRole({ title })));
  };
  const onDelRole = ({ id }) => {
    const delItem = roles.filter((i) => i.id !== id);
    setRoles(delItem);
  };

  return {
    roles,
    onAddRole,
    onDelRole,
    setRoles,
  };
};
