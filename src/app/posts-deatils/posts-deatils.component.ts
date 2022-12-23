import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { from, map, Observable, of } from 'rxjs';
import { post } from '../model/posts.model';
import { loadPostsListId } from '../state/posts.actions';
import { getPostsId } from '../state/posts.selectors';
import { PostsState } from '../state/posts.state';

@Component({
  selector: 'app-posts-deatils',
  templateUrl: './posts-deatils.component.html',
  styleUrls: ['./posts-deatils.component.scss'],
})
export class PostsDeatilsComponent implements OnInit {
  userId: Number = 0;
  postsDetails:Observable<post |null>;
  constructor(private activatedRoute: ActivatedRoute,private store: Store<PostsState>) {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.params.subscribe((res:any)=>{
      // console.log(res);
      this.userId=res.id
    })
    this.postsDetails=of(null);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPostsListId({id:this.userId}));
    this.postsDetails = this.store.select(getPostsId);
  }
}
