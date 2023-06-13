import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form"
import s from './Dialogs.module.css';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';

const Dialogs = (props) => {
    let dialogsPage = props.dialogsPage;

    let dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avatarURL={dialog.avatarURL} />);
    let messageElements = dialogsPage.messages.map(message => <Message message={message.message} key={message.id} />);
    let newMessageText = dialogsPage.newMessageText;

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }

    // let onMessageTextChange = (e) => {
    //     let newMessageText = e.target.value;

    //     // props.updateNewMessageText(newMessageText);
    // }
    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
                {/* <div>
                    <div>
                        <textarea value={newMessageText}
                            placeholder="Enter your message"
                            onChange={onMessageTextChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

const DialogItem = (props) => {
    let path = `/Dialogs/${props.id}`;

    return (
        <div className={s.dialog + " " + s.active}>
            <img src={`${props.avatarURL}`} alt="" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField, maxLength50]} name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessage' })(AddMessageForm);

export default Dialogs;