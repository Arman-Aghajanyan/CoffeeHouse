import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editWorker: "",
  editTask: "",
  editId: null,
};

const editTaskSlice = createSlice({
  name: "editTasks",
  initialState,
  reducers: {
    handleEditTask: (state, action) => {
      state.editId = action.payload.id;
      state.editWorker = action.payload.worker;
      state.editTask = action.payload.title;
    },
    handleChangeWorker: (state, action) => {
      state.editWorker = action.payload;
    },
    handleChangeTask: (state, action) => {
      state.editTask = action.payload;
    },
    handleUpdated: (state) => {
      state.editId = null;
    },
  },
});

export const { handleEditTask, handleChangeWorker, handleChangeTask, handleUpdated } =
  editTaskSlice.actions;

export default editTaskSlice.reducer;
