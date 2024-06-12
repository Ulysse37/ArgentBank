import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar.jsx';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import ProfileAuth from './redux/ProfileAuth.js';
import Footer from './components/footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={
            <ProfileAuth isProtected={false}>
              <Login />
            </ProfileAuth>}>
          </Route>
          <Route path="/profile" element={
            <ProfileAuth isProtected={true}>
              <Profile />
            </ProfileAuth>}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
