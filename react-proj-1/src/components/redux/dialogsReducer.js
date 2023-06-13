const SEND_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let intialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "What is your name?" },
    ],
    dialogs: [
        { id: 1, name: "Kirill", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
        { id: 2, name: "Valera", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
        { id: 3, name: "Sasha", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
        { id: 4, name: "Dima", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
        { id: 5, name: "Andrey", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
        { id: 6, name: "Avigeya", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
    ]
}

const dialogsReducer = (state = intialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: newMessageText }]
            };
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     return {
        //         ...state,
        //         newMessageText: action.newMessageBody
        //     };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

// export const updateNewMessageTextActionCreator = (message) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_TEXT,
//         message: message
//     };
// }

export default dialogsReducer;