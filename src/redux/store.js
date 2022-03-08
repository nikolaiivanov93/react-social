import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
            {id: 1, message: 'Hello', likesCount: 5},
            {id: 2, message: 'you live in Moscow?', likesCount: 5},
            {id: 3, message: 'you work frontend developer?', likesCount: 5}
            ],
            newPostText: 'апвап'
        },
        dialogsPage: {
            messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'You work together?'},
            ],
            dialogs: [
            {id: 1, name: 'Николай'}, 
            {id: 2, name: 'Татьяна'},
            {id: 3, name: 'Тимофей'},
            {id: 4, name: 'Александр'},
            {id: 5, name: 'Антон'},
            {id: 6, name: 'Никита'},
            {id: 7, name: 'Максим'},
            {id: 8, name: 'Alex'}
            ],
            newMessage: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Максим', img: './friend.jpg'},
                {id: 2, name: 'Олег', img: './friend.jpg'},
                {id: 1, name: 'Захар', img: './friend.jpg'},
                {id: 1, name: 'Сеня', img: './friend.jpg'},
            ]
        },
        
    },
    _callSubscriber () {
        console.log('state changed')
    },
    getState () {
        return this._state;
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sideBarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
       
    }
}






export default store;
window.store = store;