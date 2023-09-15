import React from "react";
import { useWorkerState } from "../hooks/use-worker-state";
import EditDelButtons from "./editDelButtons";

function WorkerItem() {
  const [worker] = useWorkerState();
  return (
    <div className="employeeManagement">
      {worker.length === 0 ? (
          <div className="Empty">It's empty</div>
      ):(
      worker.map((i) => (
        <div key={i.id}>
          <div className="workerMap">
            <div className="workerInfo flex">
              <img src={i.img} alt="img" className="itemImg" />
              <div className="itemTitle">
                {i.name}
              </div>
            </div>
            <div className="workerInfo">{i.birthday}</div>
            <div className="workerInfo">{i.role}</div>
            <EditDelButtons
              id={i.id}
              name={i.name}
              birthday={i.birthday}
              role={i.role}
              img={i.img}
            />
          </div>
        </div>
      )))}
    </div>
  );
}

export default WorkerItem;
