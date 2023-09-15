import React, { useContext } from "react";
import { useLocalTaskState } from "../hooks/localHooks/useLocalTaskState";
import { useLocalTaskSetters } from "../hooks/localHooks/useLocalTaskSetters";
import { useWorkerState } from "../../workers/hooks/use-worker-state";
import { useTaskActions } from "../hooks/useTaskActions";
import { TaskLocalContext } from "../taskLocalContex";
import { NavLink } from "react-router-dom";

function CreateTask() {
  const [workers] = useWorkerState();
  const { onAddTask } = useTaskActions();
  const { task, selected, selectOpen, editId } = useLocalTaskState();
  const { setTask, setSelectOpen, setSelected } = useLocalTaskSetters();
  const { handleUpdateItem } = useContext(TaskLocalContext);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const handleCreateRole = () => {
    if (task === "") return;
    onAddTask({ title: task, worker: selected });
    setTask("");
    setSelected("");
    if (editId) {
      handleUpdateItem();
    }
  };

  return (
    <div className="paddings-for-items">
      <div className="CrateTask">Create Task</div>
      <div className="createTask">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="EmployeeName"
          placeholder="Type a new Task"
        />
        <div className="selectedWorker" onClick={handleSelect}>
          <div className="selected">
            <div className="spanSelected">{selected}</div>
          </div>
          <div>
            {selectOpen &&
              workers.map((i) => {
                return (
                  <div
                    className="drpSelect"
                    key={i.id}
                    onClick={() => {
                      setSelected(i.name);
                    }}
                  >
                    {i.name}
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          {editId ? (
            <div className="addEmployee bgColor" onClick={handleCreateRole}>
              Update
            </div>
          ) : (
            <div className="addEmployee" onClick={handleCreateRole}>
              Create
            </div>
          )}
        </div>
      </div>
      <div className="CreateRole backToPages">
        <NavLink to="/tasks" className="createRoleColor">
          Back
        </NavLink>
      </div>
    </div>
  );
}

export default CreateTask;
