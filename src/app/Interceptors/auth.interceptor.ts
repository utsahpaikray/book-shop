// This interceptor used to intercept all request and add access token to request header.

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService }  from '../services/loader/loader.service';
import { ErrorHandlerService} from '../services/error-handler-service/error-handler.service'
import { ToasterService} from '../services/toaster/toaster.service';
import { tap, switchMap } from 'rxjs/operators';
import { HelperService } from '../services/helper-service/helper.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _loaderService: LoaderService, private _errHandler: ErrorHandlerService, private _toastr: ToasterService, private router: Router, private helperservice: HelperService){
      router.events.subscribe((val) => {
          if(val instanceof NavigationEnd) {
             if(this._loaderService){
               
                this._loaderService.dismissloading();
             }
          }
      });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clear the all toast messages before place new request && show loader as well
    var self = this;

    this._loaderService.presentLoading();
    return from(this.helperservice.getSession()).pipe(switchMap(token => {
              var header = {};
              if (token) {
                  header = {
                    Authorization: 'Bearer ' + token.Token,
                    Localdate: new Date().toDateString()
                  }
              } else {
                header = {
                 // Authorization:'Bearer',
                  Localdate: new Date().toDateString()
                };
              }
           //   this._loaderService.presentLoading();
           if(request.body!==null){
            request = request.clone({
              setHeaders: header,
              url: environment.host + request.url
            });
           }
             
              return next.handle(request).pipe(tap(
                (success: any) => {
                  if (success instanceof HttpErrorResponse) {
                    console.log('working')
                  }
                },
                (err: any) => {
                   if(this._loaderService){
                    
                      this._loaderService.dismissloading();
                  }
                  if (err instanceof HttpErrorResponse) {}
                }, ()=>{
                   if(this._loaderService){
                      this._loaderService.dismissloading();
                   }
                }
              ));
      }));
  }

  private _token(): string{
    if(this.helperservice.session.get()){
      if(this.helperservice.session.get()['Token']){
        return 'Bearer ' + this.helperservice.session.get()['Token'];
      }
      else{
        return '';
      }
    }
    return '';
  }

  private _setHeaders(): any{
    var business_token = localStorage.getItem('business_token');
    var session = this.helperservice.session.get();
    if(session){
      session = session['Token'];
    }
    if(session){
      if(business_token){
        return {
          Authorization: 'Bearer ' + session,
          Localdate: new Date().toDateString(),
          Business: business_token
        }
      }else{
        return {
          Authorization: 'Bearer ' + session,
          Localdate: new Date().toDateString()
        }
      }
    }else{
      return {
        Localdate: new Date().toDateString()
      }
    }
  }

}
