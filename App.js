import "./App.css";
import CompanyEmployeeManagement from "./CompanyEmployeeManagement";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./assets/pages/AboutUs";
import HomePage from "./assets/pages/HomePage";
import Roles from "./assets/pages/Roles";
import Workers from "./assets/pages/Workers";
import Tasks from "./assets/pages/Tasks";
import ErrorPage from "./assets/pages/ErrorPage";
import InLocalCreateRole from "./assets/roles/createRole/InLocalCreateRole";
import InLocalWorkerCreate from "./assets/workers/createWorker/inLocalWorkerCreate";
import InLocalTaskCreate from "./assets/tasks/createTask/InLocalTaskCreate";
import SRoute from "./assets/SiteRoute/Route";
import React from "react";

function App() {
  return (
    <>
      <SRoute />

      <Routes>
        <Route
          path="/Company-Employee-Management"
          element={<CompanyEmployeeManagement />}
        />
        <Route path="/About-US" element={<AboutUs />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/roles/create" element={<InLocalCreateRole />} />
        <Route path="/workers/create" element={<InLocalWorkerCreate />} />
        <Route path="/tasks/create" element={<InLocalTaskCreate />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
