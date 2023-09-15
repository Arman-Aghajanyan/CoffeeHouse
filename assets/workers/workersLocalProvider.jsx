import React from 'react';
import {useWorkerLocalProvider} from "./hooks/LocalHooks/useWorkerLocalProvider";
import {WorkerLocalContext} from "./workerLocalContext";

function WorkersLocalProvider({ children }) {
    const state = useWorkerLocalProvider()
    return (
        <WorkerLocalContext.Provider value={state}>
            {children}
        </WorkerLocalContext.Provider>
    );
}

export default WorkersLocalProvider;