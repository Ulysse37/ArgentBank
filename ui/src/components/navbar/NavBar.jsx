import logo from '../../assets/argentBankLogo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a className="main-nav-logo" href="/">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
          </a>
      </li>
      <li>
          <Link to="/Login" className="main-nav-item">
          <FontAwesomeIcon className="signup-icon" icon={faCircleUser}/>
            Sign {location.pathname === '/profile' ? 'Out' : 'In'}
          </Link>
      </li>
      </ul>
    </nav>
  )
}

export default NavBar;
