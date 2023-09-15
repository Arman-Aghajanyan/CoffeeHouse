import { useContext } from "react";
import { WorkerContext } from "../workerContext";

export const useWorkerActions = () => {
  const { setWorkers, onAddWorker, onDelWorker } = useContext(WorkerContext);
  return {
    setWorkers,
    onAddWorker,
    onDelWorker,
  };
};
