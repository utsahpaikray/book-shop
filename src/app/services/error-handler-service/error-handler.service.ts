import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(){

  }
  // Observable string sources
  private errorSource = new Subject<any>();

  // Observable string streams
  public isCaughtError = this.errorSource.asObservable();

  // Service message commands
  public pushError(err) {
    if (err.error.Code || err.error.Code === 0) {
      const errorMessage = {
        'code': err.error.Code,
        'identifier': err.error.Identifier,
        'message': err.error.Message,
        'status': err.status,
        'url': err.url
      };
      this.errorSource.next(errorMessage);
    } else {
      const errorMessage = {
        'message': 'Please check your connection settings.'
      };
      this.errorSource.next(errorMessage);
    }
  }

}
