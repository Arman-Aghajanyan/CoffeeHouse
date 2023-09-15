import React from "react";
import TaskItem from "./taskItem/TaskItem";
import { NavLink } from "react-router-dom";
import EditingTask from "./taskItem/EditingTask";

function Task() {
  return (
    <div className="paddings-for-items">
      <NavLink to="/tasks/create">
        <div className="CreateRole">Create Task</div>
      </NavLink>
      <EditingTask />
      <div className="AllTasks">
        <TaskItem />
      </div>
    </div>
  );
}

export default Task;
