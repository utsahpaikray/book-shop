// This service provides helper methods throughout the app.

import { Injectable } from '@angular/core';
import { isDate } from 'util';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public businessCurrency:string;
  public monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  private browser = null;
  private _subscribe = [];
  public domElement=document.body;
  public isPieDataNull:boolean=true;
  public classlist: DOMTokenList;
  constructor(private _router: Router,public storage: Storage,public platform: Platform) {


  }

  // Session related methods
  public setSession(res) {
    this.platform.ready().then(() => {
     this.storage.set('session', res);
    });
     
  }
  public  getSession(){
    return this.storage.get('session');
  }
  public session = {
    'get': function() {return JSON.parse(localStorage.getItem('session'));},
    'set': function(session: any) {localStorage.setItem('session', JSON.stringify(session)); },
    'remove': function() {localStorage.removeItem('session'); }
  };

  // Business session related methods
  public business = {
    get: function() {
      return JSON.parse(localStorage.getItem('business'));
    },
    set: function(business: any) {
      localStorage.setItem('business', JSON.stringify(business));
    },
    remove: function() {
      localStorage.removeItem('business');
      localStorage.removeItem('business_token');
    }
  };

  public formatAmountValue(amount: number){
    if(amount==null){///Case of expense break down
      return null;
    }

    if(amount < 0){
      amount=(amount * -1);
      return '('+this.businessCurrency+ amount.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+')';
    }

   return this.businessCurrency+amount.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  // Format Date (YYYY-MM-DD)
  public formatDate(date: Date): any {
    if (isDate(date)) {
      let day: string, month: string, year: string | number;
      day = ('0' + date.getDate()).slice(-2);
      month = ('0' + (date.getMonth() + 1)).slice(-2);
      year = date.getFullYear();
      return year + '-' + month + '-' + day;
    } else {
      return date;
    }
  }

  // To check that model has properties or not.
  // public hasModel(model: { hasOwnProperty: (arg0: string) => void; }): boolean {
  //   for (const prop in model) {
  //     if (model.hasOwnProperty(prop)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // To check that model has a specific property or not.
  public hasProperty(model: { [x: string]: any; }, property: string): boolean {
    if (model[property]) {
      return true;
    } else {
      return false;
    }
  }

  // To get total number of records.
  public getTotalRecords(model: { [x: string]: number; }[], prop?: string | number): number {
    if (model.length) {
      if (prop) {
        return model[0][prop];
      } else {
        return model[0]['TotalRecords'];
      }
    } else {
      return 0;
    }
  }

  // To Handle subscriptions
  public subscriptions(sub?: any) {
    if (sub) {
      this._subscribe.push(sub);
    } else {
      for (let i = 0; i < this._subscribe.length; i++) {
        this._subscribe[i].unsubscribe();
        if (i === this._subscribe.length - 1) {
          this._subscribe = [];
        }
      }
    }
  }

  // To get login path against current role
  // public getLoginAgainstCurrentRole(): string {
  //   const session = this.session.get();
  //   if(session){
  //     let path = '/' + Resources.borrower + '/authentication/login';
  //     if (session) {
  //       if (session['Role']) {
  //         if (session['Role'] === UserRole.Lender) {
  //           path = '/' + Resources.lender + '/authentication/login';
  //         } else if (session['Role'] === UserRole.Accountant) {
  //           path = '/' + Resources.accountant + '/authentication/login';
  //         }
  //       }
  //     }
  //     return path;
  //   }else{
  //     return '';
  //   }
  // }

  // Configuration for success toast messages
  public toastConfigurations(): object {
    return {
      timeOut: 3000,
      extendedTimeOut: 1000,
      closeButton: false,
      tapToDismiss: true
    };
  }

  // Configuration for success toast messages
  public reloadBiusinessToastConfiguration(): object {
    return {
      extendedTimeOut: 0,
      closeButton: false,
      tapToDismiss: false
    };
  }

  // Find objects using key
  public findObjectByKey(array: any[], key: string, value: string) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

  // Remove empty spaces from string
  public removeEmptySpaces(value: { replace: (arg0: RegExp, arg1: string) => void; }) {
    // return value.trim(); // trim is used to remove empty spaces from start and end
    return value.replace(/\s/g, ''); // remove all the spaces from string
  }

  public isSafariBrowser(): boolean {
    if (this.browser.indexOf('safari') !== -1) {
      return true;
    } else {
      return false;
    }
  }

  // clearing toast messages


  // public pathToUsers(){
  //   var role = 0;
  //   var session = this.session.get();
  //   if(session){
  //     role = session['Role'];
  //   }else{
  //     this._router.navigateByUrl('sme/authentication');
  //   }
  //   switch (role) {
  //     case UserRole.Lender: return 'lender';
  //     case UserRole.Borrower: return 'sme';
  //     case UserRole.CreditExchange: return 'exchange';
  //     case UserRole.PayPieStaff: return 'staff';
  //     case UserRole.Accountant: return 'accountant';
  //     default:'';
  //   }
  // }

  public dataTillDate(): string{
    var lastDate = this.business.get()['LastDownloadedDate'];
    var year = lastDate.substr(0, 4);
    var month = lastDate.substr(5, 2);
    var date = lastDate.substr(8, 2);
    if(month.charAt(0) == '0'){
      month = month.substr(1);
      month = parseInt(month)
    }
    return this.monthNames[month - 1] + ' ' + date + ', ' + year;
  }

  public dataSinceOneYear(): string{
    var lastDate = this.business.get()['LastDownloadedDate'];
    var newDate = new Date(new Date(lastDate).setMonth(-9));
    return this.monthNames[newDate.getMonth()] + ' 01, ' + newDate.getFullYear();
  }


  //Detect if device is Mobile
Android():any {
    return navigator.userAgent.match(/Android/i);
}
BlackBerry():any{
  return navigator.userAgent.match(/BlackBerry/i);
}

iOS() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}

OperaMini() {
  return navigator.userAgent.match(/Opera Mini/i);
}

Windows() {
  return navigator.userAgent.match(/IEMobile/i);
}
public isMobile():boolean{
    if((this.Android() || this.BlackBerry() || this.iOS() || this.OperaMini() || this.Windows())){
      return true;
    }
    else{
      return false;
    }
}
public drilldownModal(name){
  if(typeof this.classlist!=="undefined" && this.classlist!==(< HTMLInputElement > name).classList){
    this.classlist.remove('in');
   }
   this.classlist=(< HTMLInputElement > name).classList;
   (< HTMLInputElement > name).classList.toggle('in');
 }
 public close(name){
  (< HTMLInputElement > name).classList.toggle('in');
 }
}
