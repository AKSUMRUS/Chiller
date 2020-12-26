import {createReducer} from "@reduxjs/toolkit";

import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
    isLoading: false,
    user: null,
    token: null,
    errors: null,
}
export const authReducer = createReducer(initialState,{
    LOGIN_START: (state) => {
        state.isLoading = true;
        return state;
    },
    LOGIN_SUCCESS: (state,  { data: {user, token}}) => {
        AsyncStorage.setItem('authToken', token)
        return {
            errors: null,
            isLoading: false,
            user,
            token,
        };
    },
    LOGIN_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },
    SIGNUP_START: (state) => {
        state.isLoading = true;
        return state;
    },
    SIGNUP_SUCCESS: (state, { data: {user, token}}) => {
        AsyncStorage.setItem('authToken', token)
        return {
            errors: null,
            isLoading: false,
            user,
            token,
        };
    },
    SIGNUP_FAIL: (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        return state;
    },
    LOGOUT_START: (state, action) => {
        state.isLoading = true;
        return state;
    },
    LOGOUT_SUCCESS: (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.user = null;
        return state;
    },
    LOGOUT_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },
    SET_TOKEN: (state, action) => {
        state.token = action.token
        return state;
    },
    GET_CURRENT_USER_START: (state) => {
        state.isLoading = true;
        return state;
    },
    GET_CURRENT_USER_SUCCESS: (state, { data: user }) => {
        return {
            ...state,
            errors: null,
            isLoading: false,
            user,
        };
    },
    GET_CURRENT_USER_FAIL: (state, action) => {
        if(action.status === 401) {
            state.token = null;
        }
        state.isLoading = false;
        state.error = action.error;
        return state;
    },
})
