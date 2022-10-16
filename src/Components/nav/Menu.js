import './menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {

  return (
    <nav className="nav">
      <div className="content-iten-nav">
        <NavLink className={({ isActive }) =>isActive ? 'a-nav active' : 'a-nav'} to="/">All</NavLink>
        <NavLink className={({ isActive }) =>isActive ? 'a-nav active' : 'a-nav'} to="/completed">Completed</NavLink>
        <NavLink className={({ isActive }) =>isActive ? 'a-nav active' : 'a-nav'} to="/pending">Pending</NavLink>
      </div>
    </nav>
  );
}

export default Menu;