import React from 'react';
import Post from './Posts/Post';
import { Field, reduxForm } from "redux-form"
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';

const maxLength20 = maxLengthCreator(20);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[requiredField, maxLength20]} placeholder={'enter text'} id="" cols="30" rows="5" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostText' })(AddNewPostForm);

const MyPost = React.memo(props => {
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps != this.props || nextState != this.state;
    // }

    console.log("render");
    let postMessage = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} key={post.id} />);
    // let addNewPost = () => {
    //     props.addPost();
    // };

    // let onPostChange = (event) => {
    //     let newMessageText = event.target.value;
    //     props.updateNewPostText(newMessageText);
    // }

    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    };

    return (
        <div>
            my post
            <AddNewPostReduxForm onSubmit={addNewPost} />
            <div className='posts'>
                {postMessage}
            </div>
        </div>
    )


});

export default MyPost;