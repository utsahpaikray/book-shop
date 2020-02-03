import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';
export interface PeriodicElement {
  PersonName: string;
  quantity: number;
  TotalPrice: number;
  PaymentMode:string,
  Address:string,
  items:{}[]
}
const ELEMENT_DATA: PeriodicElement[]=[];
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
  orders = [
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
  constructor(private crudService: FirebaseServiceService) { }

  ngOnInit() {
    //this.PushRecord();
    this.crudService.read_orderList().subscribe(resp => {
      this.dataSource =  this.mapObject(resp);
    })
   // this.dataSource = this.orders;
   
  }
  PushRecord() {
    let endPoint = '/orderList'
    this.orders.forEach(item => {
    this.crudService.pushBookStoreItems(item,endPoint).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });

    });
  }
  public mapObject(item){
    return item.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        PersonName : e.payload.doc.data()['PersonName'],
        quantity : e.payload.doc.data()['quantity'],
        Address : e.payload.doc.data()['Address'],
        PaymentMode : e.payload.doc.data()['PaymentMode'],
        TotalPrice : e.payload.doc.data()['TotalPrice'],
        items : e.payload.doc.data()['items']
      };
    })
  }

}

