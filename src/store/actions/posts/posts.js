export const getPosts = () => ({
    type: 'GET_POSTS',
    rest: '/posts/',
    method: 'GET',
    query: {}
})

export const postPosts = () => ({
    type: 'POST_POSTS',
    rest: '/posts/',
    method: 'POST',
    query: {}
})
