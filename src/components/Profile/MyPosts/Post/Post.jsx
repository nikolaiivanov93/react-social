import React from 'react';
import s from './Post.module.css';



const Post = (props) => {

    

    return(
        <div className={s.content__post}>
            <div className = {s.post}>
                <img src="luggage.svg" alt="icon" className={s.post__img}/>
                <div className={s.post__text}>{props.message}</div>

            </div>
        </div>
    )
}

export default Post;

