import profileReducer from "./profileReducer";
import dialogsReduced from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
//     contentPage: {
//       posts: [
//         { id: 1, post: "Hi", likesCount: 12 },
//         { id: 2, post: "How are you?", likesCount: 1 },
//         { id: 3, post: "What is your name?", likesCount: 8 },
//       ],
//       newPostText: 'enter text',
//     },
//     dialogsPage: {
//       messages: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "How are you?" },
//         { id: 3, message: "What is your name?" },
//       ],
//       dialogs: [
//         { id: 1, name: "Kirill", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 2, name: "Valera", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 3, name: "Sasha", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 4, name: "Dima", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 5, name: "Andrey", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 6, name: "Avigeya", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//       ],
//       newMessageText: '',
//     },
//     navbarFriends: {
//       friends: [
//         { id: 1, name: "Diana", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 2, name: "Vlad", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 3, name: "Kristina", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//         { id: 4, name: "Masha", avatarURL: "https://photosfile.com/wp-content/uploads/2022/06/Girl-DP-1.jpg" },
//       ],
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscribet() {
//     console.log("state changed");
//   },
//   subscribe(observer) {
//     this._callSubscribet = observer;
//   },
//   dispatch(action) {

//     this._state.contentPage = profileReducer(this._state.contentPage, action);
//     this._state.dialogsPage = dialogsReduced(this._state.dialogsPage, action);
//     this._state.navbarFriends = sidebarReducer(this._state.navbarFriends, action);

//     this._callSubscribet(this._state);
//   },
// }

export default store;