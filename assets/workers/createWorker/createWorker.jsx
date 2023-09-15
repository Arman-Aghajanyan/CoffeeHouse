import React, { useContext } from "react";
import { useLocalStates } from "../hooks/LocalHooks/useLocalStates";
import { useLocalSetters } from "../hooks/LocalHooks/useLocalSetters";
import { useWorkerActions } from "../hooks/use-worker-actions";
import { useRoleState } from "../../roles/hooks/use-role-state";
import { NavLink } from "react-router-dom";
import { WorkerLocalContext } from "../workerLocalContext";
import { FaArrowCircleUp } from "react-icons/fa";

function CreateWorker() {
  const { name, birthday, image } = useLocalStates();
  const { setBirthday, setName } = useLocalSetters();
  const { onAddWorker } = useWorkerActions();
  const { selected, selectOpen } = useLocalStates();
  const { setSelected, setSelectOpen, setImage } = useLocalSetters();
  const [roles] = useRoleState();
  const { toBase64 } = useContext(WorkerLocalContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleCreateRole = () => {
    if (name === "" || birthday === "" || selected === "") return;
    onAddWorker({ name: name, birthday: birthday, role: selected, img: image });
    setName("");
    setBirthday("");
    setSelected("");
    setImage("");
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await toBase64(file);
    setImage(base64);
  };

  const handleSelect = () => {
    setSelectOpen(!selectOpen);
  };
  return (
    <div className="paddings-for-items">
      <div className="cemSpan">Recruit Workers</div>
      <div className="recruit">
        <div className="wrapper">
          <div className="file-upload">
            <input type="file" onChange={uploadImage} />
            <FaArrowCircleUp />
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="EmployeeName"
            placeholder="Name"
          />
          <input
            type="text"
            value={birthday}
            onChange={handleBirthdayChange}
            className="EmployeeName"
            placeholder="Birthday"
          />
          <div className="rolesAssign" onClick={handleSelect}>
            <div className="selected">
              <div className="spanSelected">{selected}</div>
            </div>
            <div>
              {selectOpen &&
                roles.map((i) => {
                  return (
                    <div
                      className="drpSelect"
                      key={i.id}
                      onClick={() => {
                        setSelected(i.title);
                      }}
                    >
                      {i.title}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className=" addEmployee bgColor " onClick={handleCreateRole}>
          Create
        </div>
      </div>
      <div className="CreateRole backToPages">
        <NavLink to="/workers" className="createRoleColor">
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default CreateWorker;
