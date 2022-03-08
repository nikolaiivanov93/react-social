import React from 'react';
import {NavLink} from 'react-router-dom'; 
import s from './Navbar.module.css';
import Friends from './Friends/Friends';


const Navbar = (props) => {


    return(
        <nav className = {s.nav}>
            <ul className = {s.menu}>
                <li>
                    <NavLink to = "/profile" activeClassName = {s.active}>Моя страничка</NavLink>
                </li>
                <li>
                    <NavLink to = "/dialogs" activeClassName = {s.active}>Сообщения</NavLink>
                </li>
                <li>
                    <NavLink to = "/sdf" activeClassName = {s.active}>Направления</NavLink>
                </li>
                <li>
                    <NavLink to = "/dfgfd" activeClassName = {s.active}>Мои попутчики</NavLink>
                </li>
                <li>
                    <NavLink to = "/music" activeClassName = {s.active}>Моя музыка</NavLink>
                </li>
                <li>
                    <NavLink to = "/dfgf">Мои места</NavLink>
                </li>
                <li>
                    <NavLink to = "/users" activeClassName = {s.active}>Друзья</NavLink>
                </li>
            </ul>

            <Friends/>
        </nav>
    )
}

export default Navbar;