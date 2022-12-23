import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";

const getPostsState=createFeatureSelector<PostsState>('posts');
export const getPosts=createSelector(getPostsState,(state)=>{
    console.log(state)
    return state.posts;
})
export const getPostsId=createSelector(getPostsState,(state)=>{
    console.log(state)
    return state.postID;
})