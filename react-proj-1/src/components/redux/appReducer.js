import authThunkCreator from './authReducer'
import { authAPI } from "../../api/api";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};
export const setInitializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
};

export const initializeApp = () => async(dispatch) => {

    // authAPI.getMyAccount().then(response => {
    //     // dispatch(setUserPofileAC(response.data));
    // });

    // let promise = await dispatch(authThunkCreator);
    // dispatch(setInitializedSuccess);
    // promise.then(() => {

    // });
    
    // return (dispatch) => {
    //     debugger;
    //     promise.then(() => {
    //         dispatch(setInitializedSuccess());
    //     });
    // }
    // Где работаем с промисами можно сделать так. 
    // export const initializeApp = () => async (dispatch) => {
    //   await dispatch(getAuthUserData());
    //   dispatch(setInitializedSuccess());

}

export default appReducer;