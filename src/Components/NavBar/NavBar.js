import React from 'react';
import './NavBar.scss';
import landdocs from '../../Assets/landdocs.JPG';

const NavBar = () => {
    return (
        <div className="NavBar-cont">
              <label class = "logo">Land<span>Docs</span></label>
          <nav>
              <ul>
                  <li><a href = "#">Home</a></li>
                  <li><a href = "#">Knowledge Centre</a></li>
                  <li><a href = "#">FAQ's</a></li>
                  <li><a href = "#">Gallery</a></li>
                  <li><a href = "#">Ask a Login Expert</a></li>
                  <li><a href = "#">Login</a></li>
                  <li><button>Create Account</button></li>
              </ul>
          </nav>
        </div>
    )
}

export default NavBar
