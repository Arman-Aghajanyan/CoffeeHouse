import { v4 } from "uuid";

export const createTask = ({ title, worker }) => {
  return {
    id: v4(),
    title,
    worker,
  };
};
