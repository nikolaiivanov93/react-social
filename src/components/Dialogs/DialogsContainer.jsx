import React from 'react';
// import {NavLink} from 'react-router-dom'; 
import {addMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage,
    }        
}

let mapDispatchToProps = (dispatch) => {
    return {
       
        sendMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }    
}


export default compose(
                    connect(mapStateToProps, mapDispatchToProps),
                    withAuthRedirect
                )(Dialogs);