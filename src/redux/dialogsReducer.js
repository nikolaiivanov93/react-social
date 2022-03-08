const ADD_MESSAGE = 'ADD-MESSAGE';



let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState,action) => {

    
    switch (action.type) {
        
        case ADD_MESSAGE: 
            let bodyMessage = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: bodyMessage}]
            };
        default:
            return state;
    }

    
}



export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});


export default dialogsReducer;