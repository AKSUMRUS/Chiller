import React, {useEffect} from 'react';
import {View,Text,FlatList} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, postPosts} from "../store/actions/posts/posts";

const flatList = () => {
    const {isLoading, posts, errors} = useSelector(store => store.posts)
    const  dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'TEST_ACTION'})
        dispatch(getPosts())
        dispatch(postPosts())
    },[])
    return <View style={{
        paddingVertical: 60,
        backgroundColor: '#e0e0e0',
        flex: 1,
    }}>
        <Text>PostsList</Text>
    </View>
}

export default flatList;
