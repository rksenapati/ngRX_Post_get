import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsDeatilsComponent } from './posts-deatils/posts-deatils.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'postList',
    pathMatch: 'full',
  },
  { path: 'postList', component: PostsListComponent },
  { path: 'createPost', component: CreatePostComponent },
  { path: 'postDetails/:id', component: PostsDeatilsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
