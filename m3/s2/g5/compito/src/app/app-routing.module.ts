import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/pages/todos/todos.component';
import { CompletedComponent } from 'src/app/pages/completed/completed.component';


const routes: Routes = [
  {
    path: 'todo',
    component: TodosComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
