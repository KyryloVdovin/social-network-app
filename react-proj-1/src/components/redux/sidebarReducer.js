import { usersAPI } from "../../api/api";

const SET_FRIENDS = "SET_FRIENDS";

let initialState = {
  friends: []
}

// { id: 1, name: "Diana", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//     { id: 2, name: "Vlad", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//     { id: 3, name: "Kristina", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//     { id: 4, name: "Masha", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      }
    default:
      return state;
  }
}

export const setUsers = (friends) => {
  return {
    type: SET_FRIENDS,
    friends
  };
};

export const getFriendsThunkCreator = () => {
  return async (dispatch, getState) => {
    const state = getState();
    let data = await usersAPI.getFriends();
    dispatch(setUsers(data.items.filter((f) => f.followed)));
    console.log(data.items.filter((f) => f.followed));
  }
}

export default sidebarReducer;