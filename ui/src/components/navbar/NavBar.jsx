import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/argentBankLogo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/actions';

function NavBar() {
  
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleLogOut = () => { // enlève le token du localStorage puis passe le isAuthenticated à false
    
    dispatch(logOut());
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a className="main-nav-logo" href="/">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
          </a>
        </li>
        {isAuthenticated ? ( // si utilisateur connecté lien vers sa page profile sur son prénom / affichage du sign out
          <>
            <NavLink to ="/profile">
            {user && (
              <li className='nav-firstname'>
                <FontAwesomeIcon className="signup-icon" icon={faCircleUser}/>
                {user.firstName}
              </li>
            )}
            </NavLink>
            <NavLink to="/" onClick={handleLogOut} className="main-nav-item">
              <li>
                <FontAwesomeIcon className="signup-icon" icon={faArrowRightFromBracket} />
                Sign Out
              </li>
            </NavLink>
          </>
        ) : ( // si utilisateur pas connecté affichage lien vers page login
          <NavLink to="/Login" className="main-nav-item">
            <li>
              <FontAwesomeIcon className="signup-icon" icon={faArrowRightFromBracket} />
              Sign In
            </li>
          </NavLink>
        )}
      </ul>
    </nav>
  )
}

export default NavBar;
