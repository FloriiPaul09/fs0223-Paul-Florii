import { Component } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent {

  postsArray:Post[] = [];

  constructor(private postService: PostService){
    // this.postService.getPosts().then(post => {

    //   let filterPosts = post.filter(post => !post.active);

    //   this.postsArray = filterPosts;
    // })
  }
  ngOnInit():void{
    this.postsArray = this.postService.getPostStatus(true);
  }

  variableStatus(post:Post):void{
    this.postService.variableStatus(post);
    this.postsArray = this.postService.getPostStatus(true);
  }
}
