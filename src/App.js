import { Routes, Route } from "react-router-dom";

import TasksState from "./Contexts/Tasks/TasksState";
import FormState from "./Contexts/Form/FormState";
import Home from "./Pages/Home/Home";
import CompletedTasks from "./Pages/CompletedTasks/CompletedTasks";
import PendingTasks from "./Pages/PendingTasks/PendingTasks";

function App() {
    return (
        <TasksState>
            <FormState>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/completed" element={<CompletedTasks />} />
                <Route path="/pending" element={<PendingTasks />} />
            </Routes>
            </FormState>
        </TasksState>
    );
}

export default App;