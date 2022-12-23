import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/posts.reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/posts.effects';
import { CommonModule } from '@angular/common';
import { PostsDeatilsComponent } from './posts-deatils/posts-deatils.component';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CreatePostComponent,
    HeaderComponent,
    PostsDeatilsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({ posts: postReducer }),
    EffectsModule.forRoot([PostsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
