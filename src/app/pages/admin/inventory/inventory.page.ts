import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';
import { AlertController } from '@ionic/angular';
export interface PeriodicElement {
  ProductName: string;
  quantity: number;
  Price: number;
  ISBN: string;
  description: string;
  image:string
}
const ELEMENT_DATA: PeriodicElement[] =[];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class InventoryPage implements OnInit {
  public inventoryData= [];
  ProductName: any;
  Price: number;
  ISBN: string;
  quantity: number;
  img:string;
  description:string;
  confirm = false;
   dataSource = [];
  columnsToDisplay = ['ProductName', 'Price', 'ISBN', 'quantity','action'];
  expandedElement: PeriodicElement | null;
  constructor(private crudService: FirebaseServiceService,public alertController: AlertController) { }
  ngOnInit() {
    this.crudService.read_inventoryBookList().subscribe(resp => {
      this.dataSource =  this.mapObject(resp);
    })
   
  }
  async presentAlertConfirm(rowID) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you want to delete the record?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, 
        {
          text: 'Okay',
          handler: () => {
            this.confirm = true;
             this.crudService.delete_inventoryBookList(rowID);
          }
        }
      ]
    });

    await alert.present();
  }
  PushRecord() {
    let endPoint = 'inventoryBookList'
    this.inventoryData.forEach(items => {
    let item = {};
    item['type'] = '';
    item['quantity'] = items.quantity;
    item['ProductName'] = items.ProductName;
    item['description'] = items.description;
    item['ISBN'] = items.ISBN;
    item['Price'] = items.Price;
    item['image'] = items.image;
    this.crudService.pushBookStoreItems(item,endPoint).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });

    });
  }
  CreateRecord() {
    let endPoint = 'inventoryBookList'
    let item = {};
    item['type'] = '';
    item['quantity'] =this.quantity;
    item['ProductName'] =this.ProductName;
    item['description'] = this.description?this.description:'';
    item['ISBN'] =this.ISBN;
    item['Price'] =this.Price;
    item['image'] =this.img;
    this.crudService.pushBookStoreItems(item,endPoint).then(resp => {
      console.log(resp);
      this.quantity = null;
      this.description = '';
      this.ProductName= '';
      this.Price = null;
      this.ISBN = '';
      this.img = ''

    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID) {
    this.presentAlertConfirm(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    console.log(recordRow)
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
  public mapObject(item){
    return item.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        ProductName: e.payload.doc.data()['ProductName'],
        description: e.payload.doc.data()['description'],
        ISBN: e.payload.doc.data()['ISBN'],
        image: e.payload.doc.data()['image'],
        Price: e.payload.doc.data()['Price'],
        quantity: e.payload.doc.data()['quantity']
      };
    })
  }
}





