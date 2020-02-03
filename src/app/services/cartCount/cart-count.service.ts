import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FirebaseServiceService } from '../firebaseService/firebase-service.service';
@Injectable({
  providedIn: 'root'
})
export class CartCountService {
  private cartCount = 0;
  private loaderSubject = new Subject<any>();
  countState = this.loaderSubject.asObservable();
  cartItems: any;
  constructor(private crudService: FirebaseServiceService){
  this.showCount();
  }
  showCount() {
    this.crudService.read_cartItems().subscribe(cartItems=>{
      this.cartCount = this.mapObject(cartItems);
      this.loaderSubject.next(this.cartCount);
    });
  }
  public mapObject(item){
    this.cartCount = 0;
   item.map(e => {
        this.cartCount = this.cartCount + Number(e.payload.doc.data()['quantity'])
    });
    return this.cartCount;
  }
}

