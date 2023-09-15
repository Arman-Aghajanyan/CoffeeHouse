import { useState } from "react";
import { WORKER_STORAGE_KEY } from "../workerStorageKey";
import { createWorker } from "../createWorker";

export const useWorkerProvider = () => {
  const [workers, _setWorkers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(WORKER_STORAGE_KEY));
    } catch (error) {
      return [];
    }
  });

  const setWorkers = (workers) => {
    localStorage.setItem(WORKER_STORAGE_KEY, JSON.stringify(workers));
    _setWorkers(workers);
  };

  const onAddWorker = ({ name, birthday, role, img }) => {
    setWorkers(workers.concat(createWorker({ name, birthday, role, img })));
  };
  const onDelWorker = ({ id }) => {
    const delItem = workers.filter((i) => i.id !== id);
    setWorkers(delItem);
  };

  return {
    workers,
    onAddWorker,
    onDelWorker,
    setWorkers,
  };
};
