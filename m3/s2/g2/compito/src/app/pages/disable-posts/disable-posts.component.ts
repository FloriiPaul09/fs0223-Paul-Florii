import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-disable-posts',
  templateUrl: './disable-posts.component.html',
  styleUrls: ['./disable-posts.component.scss']
})
export class DisablePostsComponent {

  postsArray:Post[] = [];

  constructor(private postService: PostService){
    this.postService.getPosts().then(post => {

      let filterPosts = post.filter(post => !post.active);

      this.postsArray = filterPosts;
    })
  }


}
