import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editName: "",
  editId: null,
};

const editRolesSlice = createSlice({
  name: "editRoles",
  initialState,
  reducers: {
    handleEdit: (state, action) => {
      state.editId = action.payload.id;
      state.editName = action.payload.title;
      state.editImg = action.payload.img;
    },
    handleChange: (state, action) => {
      state.editName = action.payload;
    },
    handleUpdated: (state) => {
      state.editId = null;
    },
  },
});

export const { handleEdit, handleChange, handleUpdated, handleChooseImg } =
  editRolesSlice.actions;

export default editRolesSlice.reducer;
