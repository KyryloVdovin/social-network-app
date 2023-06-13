
import React from 'react';
import MyPost from './MyPost';
import { addPostActionCreator } from "../redux/profileReducer";
import {connect} from 'react-redux';

// const MyPostContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addNewPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };
                
//                     let onPostChange = (e) => {
//                         let text = e.target.value;
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }

//                     return <MyPost updateNewPostText={onPostChange}
//                         addPost={addNewPost}
//                         posts={state.contentPage.posts}
//                         newPostText={state.contentPage.newPostText} />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStatetoProps = (state) => {
    return {
        posts: state.contentPage.posts,
        newPostText: state.contentPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPostText) => {
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        },
    }
}

const MyPostContainer = connect(mapStatetoProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;