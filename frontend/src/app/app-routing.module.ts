import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PostComponent } from './post/post.component'
import { PostDetailComponent } from './post-detail/post-detail.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: PostDetailComponent},
  { path: 'post', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
