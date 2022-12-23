import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Store } from '@ngrx/store';
import { addPost } from '../state/posts.actions';
import { PostsState } from '../state/posts.state';
import { validateFirstLetter } from '../validator/startLetter.validator';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<PostsState>) {
    this.postForm = this.createForm();
  }

  ngOnInit(): void {}
  createForm() {
    return this.fb.group({
      userId: ['', Validators.required],
      title: ['', [Validators.required,validateFirstLetter]],
      body: ['', Validators.required],
    });
  }
  get form() {
    return this.postForm.controls;
  }
  submit() {
    const postdata=this.postForm.value
    console.log(postdata);
    this.store.dispatch(addPost({post:postdata}))
  }
}
