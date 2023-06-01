import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // apiUrl:string = 'assets/db.json';

  private posts:Post[] = [
    {
      "id": 1,
      "title" : "Lorem Ipsum",
      "description" : "Lorem Ipsum",
      "active" : true,
      "type": "news"
    },
    {
      "id": 2,
      "title" : "Lorem Ipsum",
      "description" : "Lorem Ipsum",
      "active" : false,
      "type": "politic"
    },
    {
      "id": 3,
      "title" : "Lorem Ipsum",
      "description" : "Lorem Ipsum",
      "active" : false,
      "type":"education"
    },
    {
      "id": 4,
      "title" : "Lorem Ipsum",
      "description" : "Lorem Ipsum",
      "active" : true,
      "type": "news"
    }
  ]

  constructor() { }

  getPosts():Post[] {
    return this.posts;
  }

  getPostStatus(status:boolean):Post[]{
    return this.posts.filter(p => p.active == status)
  }

  variableStatus(post:Post):void{
    post.active = !post.active;

    let know = this.posts.findIndex(p => p.id == post.id);
    this.posts.splice(know, 1, post);
  }


}
