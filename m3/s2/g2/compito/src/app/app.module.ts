import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pageComponents/header/header.component';
import { FooterComponent } from './pageComponents/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ActivePostComponent } from './pages/active-post/active-post.component';
import { DisablePostsComponent } from './pages/disable-posts/disable-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ActivePostComponent,
    DisablePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
