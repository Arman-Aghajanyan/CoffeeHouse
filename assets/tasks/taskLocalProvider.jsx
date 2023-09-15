import React from "react";
import useLocalTaskProvider from "./hooks/localHooks/useLocalTaskProvider";
import { TaskLocalContext } from "./taskLocalContex";

function TaskLocalProvider({ children }) {
  const state = useLocalTaskProvider();

  return (
    <TaskLocalContext.Provider value={state}>
      {children}
    </TaskLocalContext.Provider>
  );
}

export default TaskLocalProvider;
