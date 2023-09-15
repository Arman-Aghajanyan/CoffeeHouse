import React from "react";
import { useRoleProvider } from "./hooks/useRoleProvider";
import { RoleContext } from "./roleContext";

function RoleProvider({ children }) {
  const allState = useRoleProvider();
  return (
    <RoleContext.Provider value={allState}>{children}</RoleContext.Provider>
  );
}

export default RoleProvider;
