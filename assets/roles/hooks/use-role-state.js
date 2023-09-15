import { useContext } from "react";
import { RoleContext } from "../roleContext";

export const useRoleState = () => {
  const { roles } = useContext(RoleContext);
  return [roles];
};
