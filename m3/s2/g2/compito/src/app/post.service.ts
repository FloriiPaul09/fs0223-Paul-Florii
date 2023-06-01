import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl:string = 'assets/db.json';

  constructor() { }

  getPosts():Promise<Post[]> {
    return fetch(this.apiUrl).then(response => response.json());
  }
}
