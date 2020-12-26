import {postsReducer} from "./posts/postsReducer";

export const rootReducer = {
    posts: postsReducer,
    users: () => ({}),
}
