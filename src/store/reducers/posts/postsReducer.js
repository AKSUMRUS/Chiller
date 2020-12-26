import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    posts: [],
    errors: null,
}
export const postsReducer = createReducer(initialState,{
    GET_POSTS_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    GET_POSTS_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.data = action.data;
        return state;
    },
    GET_POSTS_FAIL: (state, action) => {
        state.isLoading = false;
        state.data = action.error;
        return state;
    },
    POST_POSTS_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    POST_POSTS_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.data = action.data;
        return state;
    },
    POST_POSTS_FAIL: (state, action) => {
        state.isLoading = false;
        state.data = action.error;
        return state;
    }
})
