import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {
  Books: any;
  searchQuery = '';
  public standards=[
    {
      Name:'School',
      toShow:true,
      standard:[
        {value:'I'},
        {value:'II'},
        {value:'III'},
        {value:'IV'},
        {value:'V'},
        {value:'VI'},
        {value:'VII'},
        {value:'VIII'},
        {value:'IX'},
        {value:'X'},
      ]
    },
    {
      Name:'Graduation',
      toShow:false,
      standard:[
        {value:'+2 Science'},
        {value:'+2 Arts'},
        {value:'+2 Commerce'},
        {value:'+3 Science'},
        {value:'+3 Arts'},
        {value:'+3 Commerce'}
      ]
    },
    {
      Name:'Post Graduation',
      toShow:false,
      standard:[
        {value:'Science'},
        {value:'Arts'},
        {value:'Commerce'}
      ]
    }
  ]
  schoolShow: boolean = false;
  update: any;
  productAvailable: boolean;
  cartModel: any;
  booksub: any;
  cartsub: any;
  constructor(private booksService: DashboardService,  private loader: LoaderService, private toast: ToasterService, private vibration: Vibration,private crudService: FirebaseServiceService) {
  //  this.loader.presentLoading();
   }
   ionViewDidEnter(){
    this.booksub =this.crudService.read_bookList().subscribe(res => {
      this.Books = this.mapObject(res);
    });
    this.cartsub = this.crudService.read_cartItems().subscribe(cartItems=>{
      this.cartModel =  this.getID(cartItems);
      console.log(this.cartModel)
    });
   }
  ngOnInit() {
  
  }
public searchBook(){
  const query = this.searchQuery.toLowerCase();
  this.booksService.getBooks(query).subscribe(res => {
    this.Books = res.items;
  });
}
public addToCart(item){
  this.checkCartItem(item)
  this.toast.presentToast('Added to cart successfully','bottom', 'primary');
 // this.vibration.vibrate([2000,1000,2000]);
//  this.vibration.vibrate(0);
  navigator.vibrate(500); 
}
public checkCartItem(item){
    this.update = this.cartModel.find(id=>{
      if(item.id == id.id){
       return this.productAvailable = true;
      }
    });
    if(this.productAvailable && this.update && this.update.id){
      let updatedItem= this.createModel(item,this.update.quantity+1);
      this.crudService.update_cartItems(this.update.cartId, updatedItem);
      this.productAvailable = false;
    }else{
      let updatedItem= this.createModel(item,1);
      this.crudService.add_cartItem(updatedItem);
      this.productAvailable = false;
    }
    console.log(this.update)
}
public createModel(item,qty){
  return {
    title : item.title?item.title:'',
    quantity : qty,
    subtitle : item.description?item.description:'',
    isbn13 : item.isbn13?item.isbn13:'',
    price : item.price,
    url:'',
    image :item.image?item.image:'',
    id:item.id
  };
}
// public pushModel(item){
//   return {
//     title : item.volumeInfo.title?item.volumeInfo.title:'',
//     subtitle : item.volumeInfo.description?item.volumeInfo.description:'',
//     isbn13 : item.volumeInfo.publishedDate?item.volumeInfo.publishedDate:'',
//     price : item.volumeInfo.pageCount,
//     url:item.selfLink,
//     image :item.volumeInfo.imageLinks.smallThumbnail?item.volumeInfo.imageLinks.smallThumbnail:'',
//     averageRating:item.volumeInfo.averageRating?item.volumeInfo.averageRating:0,
//   };
// }
public segmentChanged(e){
// if(e.detail.value == 'School'){
//   this.schoolShow= true;
// }
this.standards.forEach(element => {
  if(element.Name ==e.detail.value){
    element.toShow= true; 
  }else{
    element.toShow= false; 
  }
});
}
public getID(item){
  return item.map(e => {
    return {
      id:  e.payload.doc.data()['id'],
      cartId:e.payload.doc.id,
      quantity : e.payload.doc.data()['quantity'],
    };
  })
}
public mapObject(item){
  return item.map(e => {
    return {
      id: e.payload.doc.id,
     // id:e.payload.doc.data()['id'],
      title : e.payload.doc.data()['title'],
      quantity : e.payload.doc.data()['quantity'],
      subtitle : e.payload.doc.data()['subtitle'],
      isbn13 : e.payload.doc.data()['isbn13'],
      price : e.payload.doc.data()['price'],
      url:e.payload.doc.data()['url'],
      image : e.payload.doc.data()['image'],
      averageRating:e.payload.doc.data()['averageRating']
    };
  })
}
// PushRecord(items) {
//   let endPoint = '/books';
//   items.forEach(item => {
//     let model = this.pushModel(item);
//   this.crudService.pushBookStoreItems(model,endPoint).then(resp => {
//     console.log(resp);
//   })
//     .catch(error => {
//       console.log(error);
//     });

//   });
// }
ionViewDidLeave(){
  this.booksub.unsubscribe();
  this.cartsub.unsubscribe();
}
ngOnDestroy(): void {
  this.booksub.unsubscribe();
  this.cartsub.unsubscribe();
}
}
