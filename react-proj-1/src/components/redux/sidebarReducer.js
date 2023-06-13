
let initialState = {
    friends: [
      { id: 1, name: "Diana", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
      { id: 2, name: "Vlad", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
      { id: 3, name: "Kristina", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
      { id: 4, name: "Masha", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
    ]
  }

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;