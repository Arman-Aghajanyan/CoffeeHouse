import React from "react";
import { NavLink } from "react-router-dom";

function SRoute() {
  return (
    <div className=" for-navigate-positions">
      <div className="Route">
        <NavLink to="/">
          <div className="routeItem">Coffee House.</div>
        </NavLink>
        <div className="sec-route">
          <NavLink to="/menu">
            <div className="routeItem routeSecondItem">Menu</div>
          </NavLink>
          <NavLink to="/roles">
            <div className="routeItem routeSecondItem">Roles</div>
          </NavLink>
          <NavLink to="/workers">
            <div className="routeItem routeSecondItem">Workers</div>
          </NavLink>
          <NavLink to="/tasks">
            <div className="routeItem routeSecondItem">Tasks</div>
          </NavLink>
          <NavLink to="/About-US">
            <div className="routeItem routeSecondItem">About Us</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SRoute;

