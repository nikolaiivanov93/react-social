import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.posts.map( p => <Post message={p.message}/>);

    let onAddPost = () => {
        props.addPost();
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className = {s.content__posts}>
            <div className = {s.content__new}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} className = {s.content__text} placeholder="Напишите пост"/>
                <button onClick={ onAddPost } className={s.content__btn}>Опубликовать</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;