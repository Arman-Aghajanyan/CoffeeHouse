import React, { useContext } from "react";
import {
  handleChangeTask,
  handleChangeWorker,
} from "../../../store/Slices/editTasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useWorkerState } from "../../workers/hooks/use-worker-state";
import { useLocalTaskState } from "../hooks/localHooks/useLocalTaskState";
import { useLocalTaskSetters } from "../hooks/localHooks/useLocalTaskSetters";
import { TaskLocalContext } from "../taskLocalContex";

function EditingTask(props) {
  const editId = useSelector((state) => state.editTasks.editId);
  const editWorker = useSelector((state) => state.editTasks.editWorker);
  const editTask = useSelector((state) => state.editTasks.editTask);
  const [workers] = useWorkerState();
  const dispatch = useDispatch();
  const { handleUpdateItem } = useContext(TaskLocalContext);

  const { selectOpen } = useLocalTaskState();

  const { setSelectOpen, setSelected } = useLocalTaskSetters();

  const handleSelect = () => {
    setSelectOpen(!selectOpen);
  };

  const handleChangeItem = (e) => {
    dispatch(handleChangeTask(e.target.value));
  };

  const handleUpdate = () => {
    handleUpdateItem();
  };

  return (
    <div>
      {editId ? (
        <div className="createTask update_item">
          <input
            type="text"
            value={editTask}
            onChange={handleChangeItem}
            className="EmployeeName"
            placeholder="Type a new Task"
          />
          <div className="selectedWorker" onClick={handleSelect}>
            <div className="selected">
              <div className="spanSelected">{editWorker}</div>
            </div>
            <div>
              {selectOpen &&
                workers.map((i) => {
                  return (
                    <div
                      className="drpSelect"
                      key={i.id}
                      onClick={() => {
                        setSelected(dispatch(handleChangeWorker(i.name)));
                      }}
                    >
                      {i.name}
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <div className="addEmployee bgColor" onClick={handleUpdate}>
              Update
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default EditingTask;
