import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebaseService/firebase-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cartItems=[
   
  ]
   
  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;
  cartTotal: number=0;
  discount:number =10;
 
  constructor(private crudService: FirebaseServiceService) { }

  ngOnInit() {
    // this.crudService.read_Students().subscribe(data => {
    // //  this.PushRecord();s
    //   this.students = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       Name: e.payload.doc.data()['Name'],
    //       Age: e.payload.doc.data()['Age'],
    //       Address: e.payload.doc.data()['Address'],
    //     };
    //   })
      this.crudService.read_cartItems().subscribe(cartItems=>{
        this.cartItems = this.mapObject(cartItems);
        this.totalCalculation(this.cartItems);
      }); 
    //});
  }
  PushRecord() {
    let endPoint = '/cartItems';
    this.cartItems.forEach(item => {
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
        title : e.payload.doc.data()['title'],
        quantity : e.payload.doc.data()['quantity'],
        subtitle : e.payload.doc.data()['subtitle'],
        isbn13 : e.payload.doc.data()['isbn13'],
        price : e.payload.doc.data()['price'],
        url:e.payload.doc.data()['url'],
        image : e.payload.doc.data()['image']
      };
    })
  }
  public totalCalculation(cartItems){
    this.cartTotal = 0;
    cartItems.forEach(item => {
       this.cartTotal = this.cartTotal+item.price*item.quantity;
   });
  }
  public increaseQTY(item){
      item.quantity = item.quantity+1;
    //  item.price = item.price*item.quantity;
      this.cartQty(item);
  }
  public deccreaseQTY(item){
    item.quantity = item.quantity-1;
//    item.price = item.price*item.quantity;
    if(item.quantity==0){
      this.deletCartItem(item);
    }else{
      this.cartQty(item);
    }
}
  public cartQty(item){
    this.crudService.update_cartItems(item.id, item);
  }
  public deletCartItem(item){
    this.crudService.delete_cartItem(item.id);
  }
  CreateRecord() {
    let record = {};
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    this.crudService.create_NewStudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
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
 

}





 

 
