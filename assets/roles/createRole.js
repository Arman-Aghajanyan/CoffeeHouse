import { v4 } from "uuid";

export const createRole = ({ title }) => {
  return {
    id: v4(),
    title,
  };
};
