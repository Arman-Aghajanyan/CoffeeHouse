import { useContext } from "react";
import { WorkerContext } from "../workerContext";

export const useWorkerState = () => {
  const { workers } = useContext(WorkerContext);
  return [workers];
};
