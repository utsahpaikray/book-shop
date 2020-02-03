import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.page.html',
  styleUrls: ['./hindi.page.scss'],
})
export class HindiPage implements OnInit {
  Books: any;
  public noteBooks=[
  ]
  public noteBookAccesories=[
  ]
  public schollBags=[
  ]
  public schollUiniforms=[
    
  ]
  public schollTifinBoxs=[
  ]
  constructor(private booksService: DashboardService,private crudService: FirebaseServiceService) { }

  ngOnInit() {
    this.crudService.read_NoteBookItems().subscribe(resp => {
      this.noteBooks = this.mapObject(resp);
    })
    this.crudService.read_noteBookAccesories().subscribe(resp => {
      this.noteBookAccesories = this.mapObject(resp);
    })
    this.crudService.read_schollBags().subscribe(resp => {
      this.schollBags = this.mapObject(resp);
    })
    this.crudService.read_schollTifinBoxs().subscribe(resp => {
      this.schollTifinBoxs = this.mapObject(resp)
    })
    this.crudService.read_schollUiniforms().subscribe(resp => {
      this.schollUiniforms = this.mapObject(resp);
    })
  }
  public addToCart(item){
    let updatedItem= this.createModel(item);
   this.crudService.add_cartItem(updatedItem);
     //this.CreateRecord(item);
  }
  public createModel(item){
    console.log(item)
    return {
      id:item.id,
      title : item.title,
      quantity : 1,
      subtitle : item.subtitle,
      isbn13 : item.isbn13,
      price : item.price,
      url:'',
      image :item.image
    };
  }
  public mapObject(item){
    return item.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        title: e.payload.doc.data()['Name'],
        subtitle: e.payload.doc.data()['subtitle'],
        isbn13: e.payload.doc.data()['isbn13'],
        image: e.payload.doc.data()['image'],
        price: e.payload.doc.data()['price'],
      };
    })
  }
  CreateRecord() {
    let endPoint =''
    this.schollTifinBoxs.forEach(items => {
    let item = {};
    item['type'] = 'NoteBook';
    item['Name'] = items.title;
    item['subtitle'] = items.subtitle;
    item['isbn13'] = items.isbn13;
    item['price'] = items.price;
    item['image'] = items.image;
    this.crudService.pushBookStoreItems(item,endPoint).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });

    });
  }

}
