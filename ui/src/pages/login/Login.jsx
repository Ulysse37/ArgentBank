import './login.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { login } from '../../redux/actions';
/* import { Link } from 'react-router-dom'; */


/* function Login() { */
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  /* const { isLoading, error } = useSelector((state) => state.login); */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(login(email, password));
    navigate('/profile');
  };

  return (
    <main className="main bg-dark main-login">
      <section className="sign-in-content">
        <FontAwesomeIcon className="signup-icon" icon={faCircleUser}/>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <Link to="/Profile" className="sign-in-button">Sign In</Link> */} {/* //! changer lien? */}
          <button className="sign-in-button" type='submit'>Sign In</button>  {/* //! A changer en bouton? */}
        </form>
      </section>
    </main>
  );
}

export default Login;
