import profileReducer, { addPostActionCreator } from "./profileReducer";

it('length of post should be incremented', () => {
    let action = addPostActionCreator("run test");

    let initialState = {
        posts: [
            { id: 1, post: "Hi", likesCount: 12 },
            { id: 2, post: "How are you?", likesCount: 111 },
            { id: 3, post: "What is your name?", likesCount: 81 },
        ]
    }

    let newPost = profileReducer(initialState, action);
    expect(newPost.posts.length).toBe(5);
    expect(newPost.posts[4].message).toBe("run test");
});