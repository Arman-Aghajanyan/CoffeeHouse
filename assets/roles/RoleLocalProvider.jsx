import React from "react";
import { useRoleLocalProvider } from "./hooks/useRoleLocalProvider";
import { RoleLocalContext } from "./roleLocalContext";

function RoleLocalProvider({ children }) {
  const state = useRoleLocalProvider();
  return (
    <RoleLocalContext.Provider value={state}>
      {children}
    </RoleLocalContext.Provider>
  );
}

export default RoleLocalProvider;
