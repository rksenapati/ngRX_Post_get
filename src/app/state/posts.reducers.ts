import { createReducer, on } from '@ngrx/store';
import { addPostSuccess, loadPostsListIdSuccess, loadPostsListSuccess } from './posts.actions';
import { initialState } from './posts.state';

const _postReducer = createReducer(
  initialState,
  on(addPostSuccess, (state,action) => {
      let post={...action.post};
      return{...state,
    posts:[...state.posts,post]}
  }),
  on(loadPostsListSuccess,(state,action)=>{
      return{
          ...state,
          posts:action.posts
      }
  }),
  on(loadPostsListIdSuccess,(state,action)=>{
    return{
        ...state,
        postID:action.posts
    }
})
);
export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
