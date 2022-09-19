import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
      <nav className="nav">
        <div className="iten-nav"><Link className="a-nav" to="/">Todas</Link></div>
        <div className="iten-nav"><Link className="a-nav" to="/realizadas">Tareas realizadas</Link></div>
        <div className="iten-nav"><Link className="a-nav" to="/pendientes">Tareas pendientes</Link></div>
      </nav>
    );
}
  
export default Menu;