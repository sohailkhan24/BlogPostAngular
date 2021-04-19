import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor(private http: HttpClient) { }

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(environment.apiUrl + '/articles');
}


// tslint:disable-next-line: ban-types
getArticle(key: String): Observable<Article> {
  return this.http.get<Article>(environment.apiUrl + '/articles/' + key);
 }
}
