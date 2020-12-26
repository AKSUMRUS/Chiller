import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UnAuthNavigator from "./unAuthentificated/UnAuthNavigator"
import AuthNavigator from "./authentificated/AuthNavigator"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setToken} from "../store/actions/auths/auths";

const RootNavigator = () => {
    const {token} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        const initialize = async () => {
            const token = await AsyncStorage.getItem('authToken')
            if(token) {
                dispatch(setToken(token))
            }
        }
        initialize();
    }, [])
    return (
        token ? <AuthNavigator/> : <UnAuthNavigator/>
    )
}

export default RootNavigator