import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.authData,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        authData: {
            userId,
            email,
            login,
            isAuth
        }
    }
};

// export const authThunkCreator = () => {
//     return (dispatch) => {
//         return authAPI.getMyAccount().then(response => {
//             if (response.resultCode === 0) {
//                 let { id, email, login } = response.data;
//                 dispatch(setAuthUserData(id, email, login, true));
//             }
//         });
//     }
// }
// export const login = (email, password, rememberMe) => {
//     return (dispatch) => {
//         authAPI.login(email, password, rememberMe).then(response => {
//             console.log(response);
//             if (response.data.resultCode === 0) {
//                 dispatch(authThunkCreator());
//             }
//             else {
//                 let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

//                 dispatch(stopSubmit("login", { _error: message }));
//             }
//         });
//     }
// }
// export const logout = () => {
//     return (dispatch) => {
//         authAPI.logout().then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false));
//             }
//         });
//     }
// }
export const authThunkCreator = () => async (dispatch) => {
    let response = await authAPI.getMyAccount();

    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authThunkCreator());
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

        dispatch(stopSubmit("login", { _error: message }));
    }
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;