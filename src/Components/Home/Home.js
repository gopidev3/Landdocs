import React from 'react';
import './Home.scss';
import greenimg from '../../Assets/greenimg.JPG';

const Home = () => {
    return (
        <div className="Home-content">
            <div className = "home-cont1">
                <h1>Single Platform for land services</h1>
                <p>Creating a single digital platform on land connecting all the stakeholders around the world providing all land services pertaining to the land across the country at one’s doorsteps anywhere on the globe</p>
                <button>Register With Us</button>
            </div>
            <div className = "home-cont2">
               <img src = {greenimg} alt = ""/>
            </div>

        </div>
    )
}

export default Home
