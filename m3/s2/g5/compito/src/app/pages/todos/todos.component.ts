import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  tasks: Todo[] = [];
  status: boolean = false;

  constructor(private todoSrvc:TodoService){}

    ngOnInit(){
      this.getList()
    }

    delete(id?:number){
      this.todoSrvc.deleteTask(id)
      .then(response =>{
        console.log('Task deleted successfully');
      })
    }

    getList(){
      this.todoSrvc.getList().then(response =>{
        this.tasks = response;
      })
    }
}
