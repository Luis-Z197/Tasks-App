import './header.css';
import Menu from '../nav/Menu';

function Header() {
    return (
      <>
        <div className="header">
          <h1 className="title">Tasks App</h1>
        </div>
        <Menu/>
      </>
    );
}
export default Header;