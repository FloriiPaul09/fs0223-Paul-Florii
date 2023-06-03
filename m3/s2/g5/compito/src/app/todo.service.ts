import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlSite:string = "http://localhost:3000/to-do";



  constructor() {}
    getList(): Promise<Todo[]> {
      return fetch(this.urlSite).then(response => response.json());
    }


}
