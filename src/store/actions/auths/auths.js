export const login = (raw) => ({
    type: 'LOGIN',
    rest: '/auth/login',
    method: 'POST',
    body: raw,
    query: {}
})
export const signUp = (raw) => ({
    type: 'SIGNUP',
    rest: '/auth/signup',
    method: 'POST',
    body: raw,
    query: {}
})
export const logOut = () => ({
    type: 'LOGOUT',
    rest: '/auth/logout',
    method: 'GET',
    query: {}
})
