import React from 'react';
// import {NavLink} from 'react-router-dom'; 
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    // let newMessageElement = React.createRef();

    /* let addMessage = () => {
        props.sendMessage();
    } */

    /* let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    } */

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessage);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>;

    let dialogsElements = state.dialogs.map( dialogs => <DialogItem name = {dialogs.name} key={dialogs.id} id = {dialogs.id}/>);
    

    let messagesElements = state.messages.map( messages => <Message message = {messages.message} key={messages.id}/>);

    return(
        <div className = {s.dialogs}>
            <div className = {s.dialogs__name}>
                {dialogsElements}

            </div>
            <div className = {s.dialogs__messages}>
                {messagesElements}
                
                
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return(
        <form classname={s.dialogs__text} onSubmit={props.handleSubmit}>
            <div className={s.text_wrapper}>
                <Field component="textarea" name="newMessage" placeholder="Напишите пост" />
                {/* <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessage} className = {s.dialogs__textar} placeholder="Напишите пост"></textarea> */}
                <button className={s.dialogs__btn}>Отправить</button>
            </div>
            
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;