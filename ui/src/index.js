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
import Footer from './components/footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
