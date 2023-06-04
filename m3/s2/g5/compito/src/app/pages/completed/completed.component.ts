import { Component, OnInit, } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/todo.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  tasks: Todo[] = [];
  loading: boolean = true;
  form:boolean = false;




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
        let todos = response.filter(todo => todo.completed)
        this.tasks = todos;
        this.loading = false;
      })
    }

    modifyTask(event:Event, todo:Todo){
      this.form = !this.form;
      event.preventDefault();
      this.todoSrvc.updateTask(todo).then(response =>{
        this.getList();
      })
    }

    newTask(event:Event, todo:Todo){
      event.preventDefault();
      this.todoSrvc.addNewTask(todo).then(response =>{
        this.getList()})
      }
    }

