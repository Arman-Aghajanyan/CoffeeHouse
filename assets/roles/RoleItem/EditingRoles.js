import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChange,
} from "../../../store/Slices/editRolesSlice";
import { RoleLocalContext } from "../roleLocalContext";

function EditingRoles() {
  const editId = useSelector((state) => state.editRoles.editId);
  const editName = useSelector((state) => state.editRoles.editName);
  const dispatch = useDispatch();
  const { handleUpdate } = useContext(RoleLocalContext);
  const handleChangeItem = (e) => {
    dispatch(handleChange(e.target.value));
  };
  const handleUpdateItem = () => {
    handleUpdate();
  };


  return (
    <div>
      {editId ? (
        <div className="flex create_role update_item ">
          <input
            type="text"
            value={editName}
            onChange={handleChangeItem}
            className="roleInput"
          />
          <div
            className="createButton updAddButt update"
            onClick={handleUpdateItem}
          >
            Update
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default EditingRoles;
