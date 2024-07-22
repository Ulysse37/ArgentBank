import './login.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { logIn, resetError } from '../../redux/actions';

const Login = () => {

  const loginError = useSelector(state => state.auth.error); // récupère message erreur action login

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(logIn({ email, password }));

      navigate('/profile');
    } catch (error){
      console.log('error');
    }
  };

  useEffect(() => {
    
    dispatch(resetError()); /*  Appelle l'action resetError lors du chargement de la page afin de vider le message d'erreur
    pour enlever le message d'erreur à l'actualisation de la page en cas de mauvais login. */
  }, [dispatch]);

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
            {loginError && <p className='error-message'>{loginError}</p>}
          </div>
          <button className="sign-in-button" type='submit'>Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
