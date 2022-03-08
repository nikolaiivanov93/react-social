import React from 'react';
import {NavLink} from 'react-router-dom'; 
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(
        <div className = { s.name + ' ' + s.active}>
            <NavLink to = {path} activeClassName = {s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;