import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Iarticle } from '../iarticle';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent {
  article : Partial<Iarticle> = {
    title : '',
    content : ''
  }

  constructor(
    public router : Router,
    private route : ActivatedRoute,
    private articleSrvc : ArticleService
    ){}

    ngOnInit(){
      this.route.params.subscribe((params:any) =>{
        this.articleSrvc.getArticleId(params.id).subscribe((article)=>{
          this.article = article;
        });
      });
    }

    editArticle(){
      this.articleSrvc.modifyArticle(this.article).subscribe((article)=>{
        this.router.navigate(['/board'])
      });
    }
}
