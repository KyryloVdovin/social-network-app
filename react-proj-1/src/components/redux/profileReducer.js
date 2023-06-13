import { profileAPI } from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    posts: [
        { id: 1, post: "Hi", likesCount: 12 },
        { id: 2, post: "How are you?", likesCount: 1 },
        { id: 3, post: "What is your name?", likesCount: 8 },
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };
        // }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};

// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
//     };
// };
export const setUserPofileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};
export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};
export const updateStatusAC = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    };
};

export const userProfileThunk = (id) => {
    return (dispatch) => {
        profileAPI.getUserProfileData(id).then(response => {
            dispatch(setUserPofileAC(response.data));
        });
    }
}
export const getStatusThunk = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(response => {
            dispatch(setStatusAC(response.data));
        });
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(updateStatusAC(response.data));
            }
        });
    }
}

export default profileReducer;