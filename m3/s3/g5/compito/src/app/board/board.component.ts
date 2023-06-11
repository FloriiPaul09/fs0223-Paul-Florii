import { Component } from '@angular/core';
import { Iarticle } from './iarticle';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  articles : Iarticle[] = [];

  newArticle : Partial <Iarticle> = {
    title : '',
    content : ''
  }

  constructor(private articleSrvc:ArticleService){}

  ngOnInit(){
    this.articleSrvc.getAllArticles().subscribe((article) => {
      this.articles = article;
    });
  }

  articleCreation(){
    this.articleSrvc.articlePost(this.newArticle).subscribe((article) => {
      this.articles.push(article);
    });
  }

  articleDelete(id:number){
    this.articleSrvc.deleteArticle(id).subscribe(article => {
      let i = this.articles.findIndex(art => art.id == id);
      this.articles.splice(i, 1);
    });
  }

}
