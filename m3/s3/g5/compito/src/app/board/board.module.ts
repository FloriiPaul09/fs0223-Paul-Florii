import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BoardComponent,
    ArticleEditComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule
  ]
})
export class BoardModule { }
