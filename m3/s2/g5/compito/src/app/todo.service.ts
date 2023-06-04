import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  urlSite:string = "http://localhost:3000/to-do";

  allLists:Todo[]= [];


  constructor() {}
    getList(): Promise<Todo[]> {
      return fetch(this.urlSite).then(response => response.json());
    }

    getTodoPromise(){

      return new Promise<Todo[]>((resolve) => {
        setTimeout(() => {
          resolve(this.allLists);
        }, 2000)
      })

    }


    getSingolaTask(id:number):Promise<Todo>{
      return fetch(this.urlSite+'/'+id).then(response => response.json());
    }

    addNewTask(task:Todo):Promise<Todo>{
      return fetch(this.urlSite,{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(task)
      }).then(response => response.json());
    }

    updateTask(task:Todo){
      return fetch(this.urlSite + '/' + task.id, {
        method : 'PUT',
        headers : {'content-type': 'application/json'},
        body : JSON.stringify(task)
      }).then(response => response.json())
    }

    deleteTask(id:number = 0){
      return fetch(this.urlSite + '/' + id, {
        method : 'DELETE',
      }).then(response => response.json());
    }
}
