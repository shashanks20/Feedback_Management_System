
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="site-name">BlockChain</span>
        </div>
        <ul className="navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student">Student</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
