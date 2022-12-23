import { post } from '../model/posts.model';

export interface PostsState {
  posts: post[];
  postID: post | null;
}
export const initialState: PostsState = {
  posts: [],
  postID: null,
};
