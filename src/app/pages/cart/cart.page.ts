import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cartItems=[
    {
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "$3.99",
      "image": "https://itbook.store/img/books/9780764579080.png",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "$0.00",
      "image": "https://itbook.store/img/books/9780764598753.png",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "$13.17",
      "image": "https://itbook.store/img/books/9781119467656.png",
      "url": "https://itbook.store/books/9781119467656"
    }
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.cartItems)
  }

}
