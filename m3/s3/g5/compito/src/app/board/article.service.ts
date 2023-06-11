import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Iarticle } from './iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleApi = environment.articleApi;

  constructor(private http:HttpClient) { }


  getAllArticles(){
    return this.http.get<Iarticle[]>(this.articleApi);
  }

  getArticleId(id:number){
    return this.http.get<Iarticle>(`${this.articleApi}/${id}`);
  }

  articlePost(data:Partial<Iarticle>){
    return this.http.post<Iarticle>(`${this.articleApi}`, data);
  }

  modifyArticle(data:Partial<Iarticle>){
    return this.http.put<Iarticle>(`${this.articleApi}/${data.id}`, data);
  }

  deleteArticle(id:number){
    return this.http.delete<Iarticle>(`${this.articleApi}/${id}`)
  }
}

