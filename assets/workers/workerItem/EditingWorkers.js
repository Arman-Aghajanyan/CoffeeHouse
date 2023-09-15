import React, { useContext } from "react";
import {
  handleChangeBirthday,
  handleChangeName,
  handleChangeRole,
    handleChangeImg
} from "../../../store/Slices/workersEditSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRoleState } from "../../roles/hooks/use-role-state";
import { useLocalSetters } from "../hooks/LocalHooks/useLocalSetters";
import { useLocalStates } from "../hooks/LocalHooks/useLocalStates";
import { WorkerLocalContext } from "../workerLocalContext";
import {FaArrowCircleUp} from "react-icons/fa";

function EditingWorkers() {
  const editName = useSelector((state) => state.editWorkers.editWorkerName);
  const editBirthday = useSelector(
    (state) => state.editWorkers.editWorkerBirthday,
  );
  const editRole = useSelector((state) => state.editWorkers.editWorkerRole);
  const editId = useSelector((state) => state.editWorkers.editId);
  const [roles] = useRoleState();
  const { setSelectOpen } = useLocalSetters();
  const { selectOpen } = useLocalStates();
  const dispatch = useDispatch();
  const { handleUpdateItem, toBase64 } = useContext(WorkerLocalContext);

  const handleSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const handleNameChangeItem = (e) => {
    dispatch(handleChangeName(e.target.value));
  };

  const handleBirthdayChangeItem = (e) => {
    dispatch(handleChangeBirthday(e.target.value));
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await toBase64(file);

    dispatch(handleChangeImg(base64));
  };

  const handleUpdate = () => {
    handleUpdateItem();
  };
  return (
    <div>
      {editId ? (
        <div className="recruit update_item">
          <div className="wrapper">
            <div className="file-upload">
              <input type="file" onChange={uploadImage} />
              <FaArrowCircleUp />
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              value={editName}
              onChange={handleNameChangeItem}
              className="EmployeeName"
              placeholder="Name"
            />
            <input
              type="text"
              value={editBirthday}
              onChange={handleBirthdayChangeItem}
              className="EmployeeName"
              placeholder="Birthday"
            />
            <div className="rolesAssign" onClick={handleSelect}>
              <div className="selected">
                <div className="spanSelected">{editRole}</div>
              </div>
              <div>
                {selectOpen &&
                  roles.map((i) => {
                    return (
                      <div
                        className="drpSelect"
                        key={i.id}
                        onClick={() => {
                          dispatch(handleChangeRole(i.title));
                        }}
                      >
                        {i.title}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="addEmployee bgColor" onClick={handleUpdate}>
            Update
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default EditingWorkers;
