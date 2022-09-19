import { Routes, Route } from "react-router-dom";
import Home from "./Views/home/Home";
import Realizadas from "./Views/realizadas/Realizadas";
import Pendientes from "./Views/pendientes/Pendientes";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/realizadas" element={<Realizadas />} />
            <Route path="/pendientes" element={<Pendientes />} />
        </Routes>
    );
}
  
export default App;