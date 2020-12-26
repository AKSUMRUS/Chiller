import {postsReducer} from "./posts/postsReducer";
import {authReducer} from "./auths/authsReducer";

export const rootReducer = {
    posts: postsReducer,
    auth: authReducer,
    users: () => ({}),
}
