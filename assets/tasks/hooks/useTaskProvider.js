import { useState } from "react";
import { TASKS_STORAGE_KEY } from "../tasksStorageKey";
import { createTask } from "../createTask";
export const useTaskProvider = () => {
  const [tasks, _setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY))
    } catch (error) {
      return []
    }
  });


  const setTasks = (tasks) => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    _setTasks(tasks);
  };

  const onAddTask = ({ title, worker }) => {
    setTasks(tasks.concat(createTask({ title, worker })));
  };
  const onDelTask = ({ id }) => {
    const delItem = tasks.filter((i) => i.id !== id);
    setTasks(delItem);
  };

  return {
    tasks,
    onAddTask,
    onDelTask,
    setTasks,
  };
};
