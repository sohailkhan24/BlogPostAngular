import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor(private http: HttpClient) { }

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>('http://localhost:8000');
}


// tslint:disable-next-line: ban-types
getArticle(key: String): Observable<Article> {
  return this.http.get<Article>('http://localhost:8000'+key);
 }
}
