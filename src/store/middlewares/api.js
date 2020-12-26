// type MiddleWareAPI = {disp
// type MiddleWare

import {BASE_URL, REQUEST_RESULT} from "../../constants";

export const api = ({dispatch}) => (next) => (action) => {
    console.log('test', action)
    if(!action.rest) {
        next(action)
        return ;
    }
    const url = BASE_URL + action.rest

    next({
        ...action,
        type: action.type + '_START',
    })
    fetch(url, {
        method: action.method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: action.method === 'CET' ? undefined : JSON.stringify(action.body),
    }).then(async (response) => {
        console.log(response)
        const data = await response.json()
        if(response.status === 200) {
            next({
                data: data,
                type: action.type + '_SUCCESS',
                prevAction: action,
            })
        } else {
            next({
                error: data,
                type: action.type + '_FAIL',
                prevAction: action,
            })
        }
    }).catch((error) => {
        next({
            error: error,
            type: action.type + '_FAIL',
            prevAction: action,
        })
        console.log(error)
    })
}
