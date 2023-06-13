import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator } from '../redux/dialogsReducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     let onSendMessageClick = () => {
//                         let action = sendMessageActionCreator();
//                         store.dispatch(action);
//                     }

//                     let onMessageTextChange = (body) => {
//                         let action = updateNewMessageTextActionCreator(body);
//                         store.dispatch(action);
//                     }
//                     return <Dialogs updateNewMessageText={onMessageTextChange}
//                         sendMessage={onSendMessageClick}
//                         dialogsPage={state} />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStatetoProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewMessageText: (body) => {
        //     let action = updateNewMessageTextActionCreator(body);
        //     dispatch(action);
        // },
        sendMessage: (newMessageBody) => {
            let action = sendMessageActionCreator(newMessageBody);
            dispatch(action);
        },
    }
}

export default compose(
    connect(mapStatetoProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);