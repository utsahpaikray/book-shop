import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, Platform, NavController } from '@ionic/angular';
import { DetailComboPage } from '../../../shared-component/detail-combo/detail-combo.page';
@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.page.html',
  styleUrls: ['./birthday.page.scss'],
})
export class BirthdayPage implements OnInit {
  public birthdayCombos=[
    {
      "image": "https://m-i3.fnp.com/assets/images/custom/category/banners/combos-birthday/mob-flowers-n-cakes-22-may-2019.jpg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "image": "https://m-i1.fnp.com/assets/images/custom/category/banners/combos-birthday/mob-flowers-n-chocolates-22-may-2019.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "image": "https://m-i2.fnp.com/assets/images/custom/category/banners/combos-birthday/mob-flowers-n-teddy-22-may-2019.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "image": "https://m-i3.fnp.com/assets/images/custom/category/banners/combos-birthday/mob-combo-of-the-week-27-may-2019.jpg",
      "url": "https://itbook.store/books/9781118026694"
    }
  ]
  public combolist= [
    {
    MakeId: 440,
    MakeName: "Aston Martin",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:"https://m-i1.fnp.com/images/pr/m/complete-love-hamper.jpg",
    price:600,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
   
    },
    {
    MakeId: 441,
    MakeName: "Tesla",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:"https://m-i1.fnp.com/images/pr/m/sweet-combo-for-sweetheart.jpg",
    price:700,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    },
    {
    MakeId: 442,
    MakeName: "Jaguar",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:"https://m-i1.fnp.com/images/pr/m/red-roses-with-truffle-cake.jpg",
    price:900,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    },
    {
    MakeId: 443,
    MakeName: "Maserati",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:"https://m-i1.fnp.com/images/pr/m/v19700101053000/perfect-combo-to-gift.jpg",
    price:550,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    },
    {
    MakeId: 445,
    MakeName: "Red Rose with Cake",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:"https://m-i2.fnp.com/images/pr/m/red-roses-with-cake.jpg",
    price:900,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    },
    {
    MakeId: 448,
    MakeName: "Toyota",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:'https://m-i3.fnp.com/images/pr/m/spectacular.jpg',
    price:850,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    },
    {
    MakeId: 449,
    MakeName: "Mercedes-Benz",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:'https://m-i2.fnp.com/images/pr/m/rose-repose.jpg',
    price:810,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    },
    {
    MakeId: 449,
    MakeName: "Mercedes-Benz",
    VehicleTypeId: 2,
    VehicleTypeName: "Passenger Car",
    comboImage:'https://m-i3.fnp.com/images/pr/m/v19700101053000/enchanted-bloom.jpg',
    price:850,
    stand:'Balugaon',
    items:[
      {category:[
        {Name:'chocolate Cake'},
        {Qty:'1'},
        {image:'http://images.bigoven.com/image/upload/t_recipe-256/ultimate-chocolate-cake-2.jpg'},

      ]},
      {category:[
        {Name:'Red Rose'},
        {Qty:'10'},
        {image:'http://keralagiftshop.com/media/catalog/product/cache/1/thumbnail/256x256/9df78eab33525d08d6e5fb8d27136e95/r/e/red-rose-bouquet-gifts-flowers-online-shopping-kerala.jpg'}
      ]},
      {category:[
        {Name:'Dairy Milk'},
        {Qty:'10'},
        {image:'https://i.ebayimg.com/images/i/172222055471-0-1/s-l1000.jpg'}
      ]},
      {category:[
        {Name:'Gulab Jamnun'},
        {Qty:'100'},
        {image:'https://photos.bigoven.com/recipe/hero/how-to-make-gulab-jamun-soft-f5a0dc.jpg?h=300&w=300'}
      ]},
      {category:[
        {Name:'Wish Card'},
        {Qty:'1'},
        {image:'https://static-s.aa-cdn.net/img/ios/1461654453/0b857bb3ec7d371d90ef546296152abc?v=1'}
      ]},
      {category:[
        {Name:'Arisha'},
        {Qty:'10'},
        {image:'https://pbs.twimg.com/profile_images/669978259245760513/IJ8DovRj_400x400.jpg'}
      ]}
    ]
    }

  ]
  dataReturned: any;
  constructor(public modalController: ModalController, public navCtrl: NavController,private plt: Platform, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async openModal(combo,index) {
    const modal = await this.modalController.create({
      component: DetailComboPage,
      componentProps: {
        "Data":combo
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });
 
    return await modal.present();

}
}
