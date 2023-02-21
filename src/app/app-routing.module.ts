import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const routes: Routes = [
  {path:"",redirectTo:"view-posts", pathMatch:"full"},
  {path:"view-posts",component:ViewPostsComponent},
  {path:"user-details/:id",component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
