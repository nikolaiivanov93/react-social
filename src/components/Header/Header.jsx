import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'; 


const Header = (props) => {
    return (
        <header className = "header">
            <div className = "header__img">
                <img  src = "../logo.svg" alt = "logo"/>
            </div>
            <div className="header__name">Travel <span>NOW</span></div>
            <div className="login-block">
                {props.isAuth ? props.login
                : <NavLink to={'/login'}> login</NavLink> }
            </div>
        </header>
    )
}

export default Header;