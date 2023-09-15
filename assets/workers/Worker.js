import React from "react";
import WorkerItem from "./WorkerItem/workerItem";
import { NavLink } from "react-router-dom";
import EditingWorkers from "./WorkerItem/EditingWorkers";

function Worker(props) {
  return (
    <div className="paddings-for-items">
      <NavLink to="/workers/create">
        <div className="cemSpan">Recruit Workers</div>
      </NavLink>
      <EditingWorkers />
      <div className="recruitCenter">
        <WorkerItem />
      </div>
    </div>
  );
}

export default Worker;
