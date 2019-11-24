import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _http: HttpClient) { }

  public login(data: any): Observable<object[]> {
    const path = '/authenticate';
    return this._http.post<object[]>(path, data);
  }

  public register(data: any): Observable<object[]> {
    const path = '/register';
    return this._http.post<object[]>(path, data);
  }
  public roles(): Observable<object[]> {
    const path = '/roles';
    return this._http.get<object[]>(path);
  }

  public forgotPassword(data: any): Observable<object[]> {
    const path = '/forgotpassword';
    return this._http.post<object[]>(path, data);
  }

  public resetPassword(data: any): Observable<object[]> {
    const path = '/resetpassword';
    return this._http.post<object[]>(path, data);
  }

  public changePassword(data: any): Observable<object[]> {
    const path = '/changepassword';
    return this._http.post<object[]>(path, data);
  }

  public resendEmail(username: string): Observable<object[]> {
    const path = '/resendconfirmaccountemail?username=' + username;
    return this._http.post<object[]>(path, '');
  }

  public logoff(): Observable<object[]> {
    const path = '/logout';
    return this._http.post<object[]>(path, '');
  }


}
