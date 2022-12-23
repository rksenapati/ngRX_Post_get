import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, from, map, Observable } from 'rxjs';
import { post } from '../model/posts.model';
import { loadPostsList } from '../state/posts.actions';
import { getPosts } from '../state/posts.selectors';
import { PostsState } from '../state/posts.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  postsList: Observable<post[]>;
  search = new FormControl();
  constructor(private store: Store<PostsState>) {
    this.postsList = from([]);
    this.search.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).subscribe((data) => {
      console.log(data);
      this.postsList=this.store.select(getPosts).pipe(map((res)=>{
        return res.filter((filterData)=>filterData.title.indexOf(data)>-1)
      }))
        // .pipe(map((res: any) => console.log(res)));
    });
  }

  ngOnInit(): void {
    this.postsList = this.store.select(getPosts);
    this.store.dispatch(loadPostsList());
  }
}
