import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private apikey = '&apiKey=fd42a901b8a64b56a35cc0253dcf72c0';
  private _controller = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd42a901b8a64b56a35cc0253dcf72c0';
  private _Everythingcontroller = 'https://newsapi.org/v2/everything?q=';
  private controllerbooks = 'https://www.googleapis.com/books/v1/volumes?q=science&printType=magazines&orderBy=newest&maxResults=40&key=AIzaSyCH7cqaX1mXq11OGJVzttCveAuc8jGP8-U'
  constructor(private _http: HttpClient) { }
  public getNews(): Observable<any> {
    return this._http.get<any>(this._controller);
  }
  public getEverythingNews(query?:string): Observable<any> {
    return this._http.get<any>(this._Everythingcontroller + query+this.apikey);
  }
 public getBooks(query?:string): Observable<any>{
  return this._http.get<any>(this.controllerbooks);
 }
}