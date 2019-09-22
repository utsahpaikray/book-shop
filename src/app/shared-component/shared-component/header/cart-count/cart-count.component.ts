import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.scss'],
})
export class CartCountComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit() {}
  public cart(){
    this._router.navigate(['master/cart']);
  }
}
