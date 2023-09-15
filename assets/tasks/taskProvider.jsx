import React from 'react';
import {useTaskProvider} from "./hooks/useTaskProvider";
import {TaskContext} from "./taskContext";

function TaskProvider({children}) {
    const state = useTaskProvider()

    return (
        <TaskContext.Provider value={state}>{children}</TaskContext.Provider>
    );
}

export default TaskProvider;