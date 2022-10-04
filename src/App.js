import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PendingTasks from "./Pages/Pending_Tasks/PendingTasks";
import TasksDone from "./Pages/Tasks_Done/TasksDone";
import TodosState from "./Contexts/Todos/TodosState";
import FormState from "./Contexts/Form/FormState";

function App() {
    return (
        <TodosState>
            <FormState>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/done" element={<TasksDone />} />
                <Route path="/pending" element={<PendingTasks />} />
            </Routes>
            </FormState>
        </TodosState>
    );
}

export default App;