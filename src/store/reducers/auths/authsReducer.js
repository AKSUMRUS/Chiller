import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    posts: [],
    errors: null,
}
export const postsReducer = createReducer(initialState,{
    LOGIN_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    LOGIN_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.data = action.data;
        return state;
    },
    LOGIN_FAIL: (state, action) => {
        state.isLoading = false;
        state.data = action.error;
        return state;
    },
    SIGNUP_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    SIGNUP_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.data = action.data;
        return state;
    },
    SIGNUP_FAIL: (state, action) => {
        state.isLoading = false;
        state.data = action.error;
        return state;
    },
    LOGOUT_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    LOGOUT_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.data = action.data;
        return state;
    },
    LOGOUT_FAIL: (state, action) => {
        state.isLoading = false;
        state.data = action.error;
        return state;
    }
})
