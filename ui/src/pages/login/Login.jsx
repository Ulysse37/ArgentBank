import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Login() {

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className="signup-icon" icon={faCircleUser}/>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/Profile" class="sign-in-button">Sign In</Link> {/* //! changer lien? */}
          {/* <button class="sign-in-button">Sign In</button>  */} {/* //! A changer en bouton? */}
        </form>
      </section>
    </main>
  );
}

export default Login;
