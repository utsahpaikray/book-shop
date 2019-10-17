import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
export interface PeriodicElement {
  PersonName: string;
  quantity: number;
  TotalPrice: number;
  PaymentMode:string,
  Address:string,
  items:{}[]
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    quantity: 1,
    PersonName: 'Manoj Swain',
    TotalPrice: 1007.9,
    PaymentMode:'COD',
    Address:'Paikakushadisha',
    items:[{
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "$3.99",
      "image": "https://itbook.store/img/books/9780764579080.png",
      "url": "https://itbook.store/books/9780764579080",
      quantity:1
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "$0.00",
      "image": "https://itbook.store/img/books/9780764598753.png",
      "url": "https://itbook.store/books/9780764598753",
      quantity:4
    },]
  },
  {
    quantity: 2,
    PersonName: 'Sukanta Maharathi',
    TotalPrice: 400.26,
    PaymentMode:'COD',
    Address:'Paikakushadisha',
    items:[{
      "title": "Jump Start HTML5",
      "subtitle": "Get up to speed with HTML5 in a weekend",
      "isbn13": "9780980285826",
      "price": "$8.84",
      "image": "https://itbook.store/img/books/9780980285826.png",
      "url": "https://itbook.store/books/9780980285826",
      quantity:2
    },
    {
      "title": "Professional JavaScript for Web Developers, 3rd Edition",
      "subtitle": "",
      "isbn13": "9781118026694",
      "price": "$27.07",
      "image": "https://itbook.store/img/books/9781118026694.png",
      "url": "https://itbook.store/books/9781118026694",
      quantity:2
    },
    {
      "title": "Cyber Security Policy Guidebook",
      "subtitle": "",
      "isbn13": "9781118027806",
      "price": "$79.99",
      "image": "https://itbook.store/img/books/9781118027806.png",
      "url": "https://itbook.store/books/9781118027806",
      quantity:4
    },]
  }, 
  {
    quantity: 3,
    PersonName: 'Pradumna Mahabali',
    TotalPrice: 694.24,
    PaymentMode:'COD',
    Address:'Paikakushadisha',
    items:[{
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "$13.17",
      "image": "https://itbook.store/img/books/9781119467656.png",
      "url": "https://itbook.store/books/9781119467656",
      quantity:1
    },
    {
      "title": "Virtual & Augmented Reality For Dummies",
      "subtitle": "An easy-to-understand primer on Virtual Reality and Augmented Reality",
      "isbn13": "9781119481348",
      "price": "$18.32",
      "image": "https://itbook.store/img/books/9781119481348.png",
      "url": "https://itbook.store/books/9781119481348",
      quantity:3
    },
    {
      "title": "Beginning Rails 3",
      "subtitle": "",
      "isbn13": "9781430224334",
      "price": "$7.27",
      "image": "https://itbook.store/img/books/9781430224334.png",
      "url": "https://itbook.store/books/9781430224334",
       quantity:1
    }]
  }
];
const books=[
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
    "title": "Jump Start HTML5",
    "subtitle": "Get up to speed with HTML5 in a weekend",
    "isbn13": "9780980285826",
    "price": "$8.84",
    "image": "https://itbook.store/img/books/9780980285826.png",
    "url": "https://itbook.store/books/9780980285826"
  },
  {
    "title": "Professional JavaScript for Web Developers, 3rd Edition",
    "subtitle": "",
    "isbn13": "9781118026694",
    "price": "$27.07",
    "image": "https://itbook.store/img/books/9781118026694.png",
    "url": "https://itbook.store/books/9781118026694"
  },
  {
    "title": "Cyber Security Policy Guidebook",
    "subtitle": "",
    "isbn13": "9781118027806",
    "price": "$79.99",
    "image": "https://itbook.store/img/books/9781118027806.png",
    "url": "https://itbook.store/books/9781118027806"
  },
  {
    "title": "Getting an Information Security Job For Dummies",
    "subtitle": "",
    "isbn13": "9781119002819",
    "price": "$19.74",
    "image": "https://itbook.store/img/books/9781119002819.png",
    "url": "https://itbook.store/books/9781119002819"
  },
  {
    "title": "Artificial Intelligence For Dummies",
    "subtitle": "Step into the future with AI",
    "isbn13": "9781119467656",
    "price": "$13.17",
    "image": "https://itbook.store/img/books/9781119467656.png",
    "url": "https://itbook.store/books/9781119467656"
  },
  {
    "title": "Virtual & Augmented Reality For Dummies",
    "subtitle": "An easy-to-understand primer on Virtual Reality and Augmented Reality",
    "isbn13": "9781119481348",
    "price": "$18.32",
    "image": "https://itbook.store/img/books/9781119481348.png",
    "url": "https://itbook.store/books/9781119481348"
  },
  {
    "title": "Beginning Rails 3",
    "subtitle": "",
    "isbn13": "9781430224334",
    "price": "$7.27",
    "image": "https://itbook.store/img/books/9781430224334.png",
    "url": "https://itbook.store/books/9781430224334"
  },
  {
    "title": "The Game Maker's Companion",
    "subtitle": "",
    "isbn13": "9781430228264",
    "price": "$5.85",
    "image": "https://itbook.store/img/books/9781430228264.png",
    "url": "https://itbook.store/books/9781430228264"
  }
]
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrdersPage implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['PersonName', 'TotalPrice','quantity','PaymentMode', 'Address'];
  expandedElement: PeriodicElement | null;
  constructor() { }

  ngOnInit() {
  }

}

