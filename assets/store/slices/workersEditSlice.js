import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editWorkerName: "",
  editWorkerBirthday: "",
  editWorkerRole: "",
  editImg: "",
  editId: null,
};

const workersEditSlice = createSlice({
  name: "editWorkers",
  initialState,
  reducers: {
    handleEditButton: (state, action) => {
      state.editId = action.payload.id;
      state.editWorkerName = action.payload.name;
      state.editWorkerBirthday = action.payload.birthday;
      state.editWorkerRole = action.payload.role;
      state.editImg = action.payload.img
    },
    handleChangeName: (state, action) => {
      state.editWorkerName = action.payload;
    },
    handleChangeBirthday: (state, action) => {
      state.editWorkerBirthday = action.payload;
    },
    handleChangeRole: (state, action) => {
      state.editWorkerRole = action.payload;
    },
    handleChangeImg: (state, action) => {
      state.editImg = action.payload;
    },
    handleUpdated: (state) => {
      state.editId = null;
    },
  },
});

export const {
  handleEditButton,
  handleChangeName,
  handleChangeBirthday,
  handleChangeRole,
  handleUpdated,
  handleChangeImg,
} = workersEditSlice.actions;

export default workersEditSlice.reducer;
