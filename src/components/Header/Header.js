import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
  const {user,logout} = useFirebase()
    return (
        <div className = "header-container">
            <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Health-Care Website</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link items" aria-current="page"to="/home">Home</Link>
              <Link class="nav-link items" to="/services">Services</Link>
              <Link class="nav-link items" to="/about">About Us</Link>
              <Link class="nav-link items" to="/contact">Contact us</Link>
              <span className ="text-white">{user.displayName}</span>
              <Link class="nav-link items" to="/login">Login</Link>
             {user?.email&& <button onClick ={logout}>LogOut</button>}
             
            </div>
          </div>
        </div>
      </nav>
            
        </div>
    );
};

export default Header;