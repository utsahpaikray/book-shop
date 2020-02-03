import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCountService } from 'src/app/services/cartCount/cart-count.service';

@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.scss'],
})
export class CartCountComponent implements OnInit {
  subscription: any;
  cartCountNumer: any=0;
  constructor(private _router: Router, public cartCount:CartCountService) {
    this.subscription = this.cartCount.countState.subscribe((count) => {
      this.cartCountNumer = count;
    });
   }

  ngOnInit() {}
  public cart(){
    this._router.navigate(['master/cart']);
  }
}
