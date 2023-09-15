import React from "react";
import { useTaskState } from "../hooks/useTaskState";
import EditDelButtons from "./editDelButtons";

function TaskItem() {
  const [tasks] = useTaskState();
  return (
    <div className="employeeManagement">
      {tasks.length === 0 ? (
        <div className="Empty">It's empty</div>
      ) : (
        tasks.map((i) => (
          <div key={i.id} className="taskAllInfo">
            <div className="flex tasksInfo">
              <div className="workerInfo taskInfo">{i.title}</div>
              <div className="workerInfo taskInfo">{i.worker}</div>
            </div>
            <EditDelButtons id={i.id} worker={i.worker} title={i.title} />
          </div>
        ))
      )}
    </div>
  );
}

export default TaskItem;
