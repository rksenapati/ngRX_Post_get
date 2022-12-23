import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from './model/posts.model';

@Injectable({
  providedIn: 'root',
})
export class ApiMappingService {
  constructor(private http: HttpClient) {}
  getPostsList() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPostsListId(id:Number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  postList(data: post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data));
  }
}
