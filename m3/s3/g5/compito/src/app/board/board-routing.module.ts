import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';


const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  },
  {
    path: 'modify/:id',
    component: ArticleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
