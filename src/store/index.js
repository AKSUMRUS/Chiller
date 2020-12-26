import  {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from "./reducers";
import {api} from "./middlewares/api";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api]
})
