import { usersAPI } from "../../api/api";
import {updateObjectInArray} from "../../utils/objects-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 35,
    isFetching: false,
    isFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", { followed: true })
                // users: state.users.map(user => {
                //     if (user.id === action.userID) {
                //         return { ...user, followed: true }
                //     }

                //     return user;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, "id", { followed: false })
                // users: state.users.map(user => {
                //     if (user.id === action.userID) {
                //         return { ...user, followed: false }
                //     }

                //     return user;
                // })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export const follow = (userID) => {
    return {
        type: FOLLOW,
        userID: userID
    }
};

export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID: userID
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    };
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    };
};
export const toggleIsFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    };
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const switchPageThunkCreator = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
    }
}

const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));

    apiMethod(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
    })
}
export const FollowThunkCreator = (userId) => {
    return (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);

        followUnfollowFlow(dispatch, userId, apiMethod, follow);
    }
}
export const UnFollowThunkCreator = (userId) => {
    return (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);

        followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
    }
}

export default usersReducer;