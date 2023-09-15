import { v4 } from "uuid";

export const createWorker = ({ name, birthday, role, img }) => {
  return {
    id: v4(),
    name,
    birthday,
    role,
    img
  };
};
