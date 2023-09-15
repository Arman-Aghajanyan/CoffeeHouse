import { configureStore } from "@reduxjs/toolkit";
import editRolesReducer from "./Slices/editRolesSlice";
import editWorkersReducer from "./Slices/workersEditSlice";
import editTasksReducer from "./Slices/editTasksSlice";

export const store = configureStore({
  reducer: {
    editRoles: editRolesReducer,
    editWorkers: editWorkersReducer,
    editTasks: editTasksReducer,
  },
});
