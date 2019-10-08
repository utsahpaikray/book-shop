import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private apikey = '&apiKey=fd42a901b8a64b56a35cc0253dcf72c0';
  private _controller = 'https://newsapi.org/v2/top-headlines?';
  private _Everythingcontroller = 'https://newsapi.org/v2/everything?q=';
  private controllerbooks = 'https://www.googleapis.com/books/v1/volumes?q=science&printType=magazines&orderBy=newest&maxResults=40&key=AIzaSyCH7cqaX1mXq11OGJVzttCveAuc8jGP8-U'
  constructor(private _http: HttpClient) { }
  public getNews(query?:string, pageSize:number=10, page:number=1): Observable<any> {
    return this._http.get<any>(this._controller+'country=us'+this.apikey+'&pageSize='+pageSize+'&page='+page);
  }
  public getEverythingNews(query?:any): Observable<any> {
    return this._http.get<any>(this._Everythingcontroller + query+this.apikey);
  }
 public getBooks(query?:string): Observable<any>{
  return this._http.get<any>(this.controllerbooks);
 }
 public getAuthors(query?:string): Observable<any>{
  return this._http.get<any>('https://randomuser.me/api/?results=10');
 }
 public getQuoates(query?:string): Observable<any>{

//   fetch("https://theysaidso.p.rapidapi.com/quote?query=software", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "theysaidso.p.rapidapi.com",
// 		"x-rapidapi-key": "52544db013mshe99152422385723p15dd59jsnb36fe41e0a67"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	co
  return this._http.get<any>('https://api.paperquotes.com/quotes?tags=love,life&language=en', {
    "headers": {
      "Token": "6504fa85a19cb5fb3b7b1c02a3fa5a13422958b9"
    }
  });
 }
}