import React from "react";
import { useWorkerProvider } from "./hooks/useWorkerPovider";
import { WorkerContext } from "./workerContext";

function WorkersProvider({ children }) {
  const state = useWorkerProvider();
  return (
    <WorkerContext.Provider value={state}>{children}</WorkerContext.Provider>
  );
}

export default WorkersProvider;
