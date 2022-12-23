import { createAction, props } from '@ngrx/store';
import { post } from '../model/posts.model';

export const ADD_POST = '[create posts page] add post';
export const ADD_POST_SUCCESS = '[create posts page] add post success';
export const LOAD_POST_LIST = '[post list page] load posts';
export const LOAD_POST_LIST_SUCCESS = '[post list page] load posts success';
export const LOAD_POST_LIST_ID = '[post list id page] load posts';
export const LOAD_POST_LIST_ID_SUCCESS =
  '[post list id page] load posts success';

export const addPost = createAction(ADD_POST, props<{ post: post }>());
export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: post }>()
);

export const loadPostsList = createAction(LOAD_POST_LIST);
export const loadPostsListSuccess = createAction(
  LOAD_POST_LIST_SUCCESS,
  props<{ posts: post[] }>()
);
export const loadPostsListId = createAction(LOAD_POST_LIST_ID,props<{id:Number}>());
export const loadPostsListIdSuccess = createAction(
  LOAD_POST_LIST_ID_SUCCESS,
  props<{ posts: post}>()
);
