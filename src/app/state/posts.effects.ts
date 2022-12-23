import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import { ApiMappingService } from '../api-mapping.service';
import { addPost, addPostSuccess, loadPostsList, loadPostsListId, loadPostsListIdSuccess, loadPostsListSuccess } from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private action: Actions,
    private apiMappingService: ApiMappingService
  ) {}
  loadPosts = createEffect(() => {
    return this.action.pipe(
      ofType(loadPostsList),
      mergeMap((action) => {
        return this.apiMappingService.getPostsList().pipe(
          map((posts: any) => {
            return loadPostsListSuccess({ posts });
          })
        );
      })
    );
  });
  loadPostsId = createEffect(() => {
    return this.action.pipe(
      ofType(loadPostsListId),
      mergeMap((action) => {
        return this.apiMappingService.getPostsListId(action.id).pipe(
          map((posts: any) => {
            return loadPostsListIdSuccess({ posts });
          })
        );
      })
    );
  });
  addNewPost = createEffect(() => {
    return this.action.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.apiMappingService.postList(action.post).pipe(map((data:any)=>{
            const post={...action.post,id:data.id};
            return addPostSuccess({post})
        }));
      })
    );
  });
}
