import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { DisablePostsComponent } from './pages/disable-posts/disable-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'active-post',
    component: ActivePostComponent
  },
  {
    path: 'disable-posts',
    component: DisablePostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
