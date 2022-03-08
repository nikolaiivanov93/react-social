import React from 'react';
import s from './Friends.module.css';
import {NavLink} from 'react-router-dom';

const Friends = (props) => {



    return(
        <div className={s.friends}>
            <NavLink to = "/friends"  activeClassName = {s.active} >Мои друзья</NavLink>
            <div className={s.friends__wrapper}>
                <div className={s.friend}>
                    <img src="./friend.jpg" alt="img" className={s.friend__img}/>
                    <div className={s.friend__name}>Алексей</div>
                </div>
            </div>
            
        </div>
        
    )
}


export default Friends;