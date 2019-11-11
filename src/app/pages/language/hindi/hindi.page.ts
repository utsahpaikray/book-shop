import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.page.html',
  styleUrls: ['./hindi.page.scss'],
})
export class HindiPage implements OnInit {
  Books: any;
  public noteBooks=[
    {
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "3.99",
      "image": "https://4.imimg.com/data4/SN/BD/ANDROID-50060382/product-500x500.jpeg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "0.00",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71VWwvDB3xL._SX466_.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "title": "Jump Start HTML5",
      "subtitle": "Get up to speed with HTML5 in a weekend",
      "isbn13": "9780980285826",
      "price": "8.84",
      "image": "https://images-na.ssl-images-amazon.com/images/I/614UvpORmZL._SL1100_.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "title": "Professional JavaScript for Web Developers, 3rd Edition",
      "subtitle": "",
      "isbn13": "9781118026694",
      "price": "27.07",
      "image": "https://4.imimg.com/data4/AQ/CS/MY-29643322/copy-and-register-500x500.jpg",
      "url": "https://itbook.store/books/9781118026694"
    },
    {
      "title": "Cyber Security Policy Guidebook",
      "subtitle": "",
      "isbn13": "9781118027806",
      "price": "79.99",
      "image": "https://rukminim1.flixcart.com/image/832/832/diary-notebook/z/u/a/classmate-classmate-notebook-cmn017-original-imae6ajy7dwktz8k.jpeg?q=70",
      "url": "https://itbook.store/books/9781118027806"
    },
    {
      "title": "Getting an Information Security Job For Dummies",
      "subtitle": "",
      "isbn13": "9781119002819",
      "price": "19.74",
      "image": "https://images-na.ssl-images-amazon.com/images/I/51uoK-EkEkL._SX466_.jpg",
      "url": "https://itbook.store/books/9781119002819"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "13.17",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71adtAB2FZL._SL1100_.jpg"
    },
    {
      "title": "Virtual & Augmented Reality For Dummies",
      "subtitle": "An easy-to-understand primer on Virtual Reality and Augmented Reality",
      "isbn13": "9781119481348",
      "price": "18.32",
      "image": "http://magicemart.com/318-large_default/classmate-note-book-72-pages.jpg",
      "url": "https://itbook.store/books/9781119481348"
    },
    {
      "title": "Beginning Rails 3",
      "subtitle": "",
      "isbn13": "9781430224334",
      "price": "7.27",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61Dj-TaLVcL._SX466_.jpg",
      "url": "https://itbook.store/books/9781430224334"
    },
    {
      "title": "The Game Maker's Companion",
      "subtitle": "",
      "isbn13": "9781430228264",
      "price": "5.85",
      "image": "https://www.offimart.com/11876-large_default/classmate-long-size-note-book-soft-cover-228-pages-unruled-2000991-pack-of-6.jpg",
      "url": "https://itbook.store/books/9781430228264"
    }
  ]
  public noteBookAccesories=[
    {
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "3.99",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61tCwiL6BLL._SX425_.jpg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "0.00",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81tilDE-GsL._SL1500_.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "title": "Jump Start HTML5",
      "subtitle": "Get up to speed with HTML5 in a weekend",
      "isbn13": "9780980285826",
      "price": "8.84",
      "image": "https://therainbowmart.com/wp-content/uploads/2019/03/PHOTO-2019-03-05-13-34-42-600x600.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "title": "Professional JavaScript for Web Developers, 3rd Edition",
      "subtitle": "",
      "isbn13": "9781118026694",
      "price": "27.07",
      "image": "https://images-na.ssl-images-amazon.com/images/I/91gaNX30IKL._SL1500_.jpg",
      "url": "https://itbook.store/books/9781118026694"
    },
    {
      "title": "Cyber Security Policy Guidebook",
      "subtitle": "",
      "isbn13": "9781118027806",
      "price": "79.99",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61HOmr667oL._SL1500_.jpg",
      "url": "https://itbook.store/books/9781118027806"
    },
    {
      "title": "Getting an Information Security Job For Dummies",
      "subtitle": "",
      "isbn13": "9781119002819",
      "price": "19.74",
      "image": "https://cdn.shopify.com/s/files/1/0101/2750/7515/products/woodmark-rosewood-pen-pencil-gift-set-7483812773947_600x_crop_center.jpg?v=1564598060",
      "url": "https://itbook.store/books/9781119002819"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "13.17",
      "image": "https://www.zebrapen.com/wp-content/uploads/2017/02/z-grip-plus-mp-colors.png"
    }
  ]
  public schollBags=[
    {
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "3.99",
      "image": "https://5.imimg.com/data5/CH/WD/MY-30771967/school-bag-500x500.jpg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "0.00",
      "image": "https://5.imimg.com/data5/VN/IU/MY-4314391/school-bags-500x500.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "title": "Jump Start HTML5",
      "subtitle": "Get up to speed with HTML5 in a weekend",
      "isbn13": "9780980285826",
      "price": "8.84",
      "image": "https://n2.sdlcdn.com/imgs/i/f/k/trunkit-Blue-School-Bag-30-SDL773269545-1-5b82c.jpeg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "title": "Professional JavaScript for Web Developers, 3rd Edition",
      "subtitle": "",
      "isbn13": "9781118026694",
      "price": "27.07",
      "image": "https://ae01.alicdn.com/kf/HTB1FTHHa.4WMKJjSspmq6AznpXaS/2019-hot-new-children-school-bags-for-teenagers-boys-girls-big-capacity-school-backpack-waterproof-satchel.jpg",
      "url": "https://itbook.store/books/9781118026694"
    },
    {
      "title": "Cyber Security Policy Guidebook",
      "subtitle": "",
      "isbn13": "9781118027806",
      "price": "79.99",
      "image": "https://www.lavieworld.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/buei110040n3_1.jpg",
      "url": "https://itbook.store/books/9781118027806"
    },
    {
      "title": "Getting an Information Security Job For Dummies",
      "subtitle": "",
      "isbn13": "9781119002819",
      "price": "19.74",
      "image": "https://rukminim1.flixcart.com/image/832/832/jk76j680/bag/p/u/x/black-orange-smart-school-bag-ii-backpack-ii-multiuse-bag-41-original-imaf7hmv2cgxw5r9.jpeg?q=70",
      "url": "https://itbook.store/books/9781119002819"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "13.17",
      "image": "https://rukminim1.flixcart.com/image/612/612/jwfa5jk0/backpack/w/b/z/casual-bl-465-laptop-backpack-blowzy-original-imaff3rfms9ggbvk.jpeg?q=70"
    }
  ]
  public schollUiniforms=[
    {
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "300.99",
      "image": "https://www.dhresource.com/0x0s/f2-albu-g7-M00-CB-F5-rBVaSltIevKAIzv7AARei0xmIts955.jpg/children-performance-school-uniform-clothing.jpg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "400.00",
      "image": "https://4.imimg.com/data4/JI/MI/MY-2767034/school-uniform-500x500.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "title": "Jump Start HTML5",
      "subtitle": "Get up to speed with HTML5 in a weekend",
      "isbn13": "9780980285826",
      "price": "508.84",
      "image": "https://sc01.alicdn.com/kf/UTB88N87kSnEXKJk43Ubq6zLppXaF/Children-School-Uniform-designs.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "title": "Professional JavaScript for Web Developers, 3rd Edition",
      "subtitle": "",
      "isbn13": "9781118026694",
      "price": "270.07",
      "image": "https://5.imimg.com/data5/EW/GU/MY-23262239/kid-school-uniform-500x500.jpg",
      "url": "https://itbook.store/books/9781118026694"
    },
    {
      "title": "Cyber Security Policy Guidebook",
      "subtitle": "",
      "isbn13": "9781118027806",
      "price": "790.99",
      "image": "https://5.imimg.com/data5/ST/RG/MY-4585683/children-school-uniform-set-500x500.jpg",
      "url": "https://itbook.store/books/9781118027806"
    },
    {
      "title": "Getting an Information Security Job For Dummies",
      "subtitle": "",
      "isbn13": "9781119002819",
      "price": "190.74",
      "image": "https://contestimg.wish.com/api/webimage/5c0771baadb58a22a6608485-large.jpg?cache_buster=48fc7eef345cde3eed9943f62a0e4fce",
      "url": "https://itbook.store/books/9781119002819"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "130.17",
      "image": "https://my-test-11.slatic.net/p/b999bb3d43844b3c4b4973e5240be58d.jpg_340x340q80.jpg_.webp"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "130.17",
      "image": "http://uniformstride.in/wp-content/uploads/2017/09/Bombay-Dyeing-Kids-School-Uniform-Shirt-and-Skirt-HU5.jpg"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "180.17",
      "image": "https://5.imimg.com/data5/MW/BC/MY-46830473/school-uniform-dress-500x500.jpg"
    }
  ]
  public schollTifinBoxs=[
    {
      "title": "Professional JavaScript for Web Developers",
      "subtitle": "",
      "isbn13": "9780764579080",
      "price": "300.99",
      "image": "http://www.globalcafeleeds.org.uk/image/cache/data/category_15/minnie-mouse-girls-school-lunch-box-sandwich-bag-sports-bottle-set-red-new-b008ux7qi8-500x500-product_popup.jpg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "title": "PCs For Dummies Quick Reference, 3rd Edition",
      "subtitle": "",
      "isbn13": "9780764598753",
      "price": "400.00",
      "image": "https://images-na.ssl-images-amazon.com/images/I/81tqINLWPNL._SX425_.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "title": "Jump Start HTML5",
      "subtitle": "Get up to speed with HTML5 in a weekend",
      "isbn13": "9780980285826",
      "price": "508.84",
      "image": "https://cdn.shopify.com/s/files/1/2351/5863/products/01_47ee9235-306e-4411-8d20-279799c2def0_350x350.jpg?v=1557843682",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "title": "Professional JavaScript for Web Developers, 3rd Edition",
      "subtitle": "",
      "isbn13": "9781118026694",
      "price": "270.07",
      "image": "https://rukminim1.flixcart.com/image/400/400/jf4a64w0/lunch-box/b/x/w/cute-lunch-box-for-kids-fancy-tiffin-box-for-school-kids-oytra-2-original-imaf3hmmuxmj4qqp.jpeg?q=90",
      "url": "https://itbook.store/books/9781118026694"
    },
    {
      "title": "Cyber Security Policy Guidebook",
      "subtitle": "",
      "isbn13": "9781118027806",
      "price": "790.99",
      "image": "https://5.imimg.com/data5/JY/UO/YK/SELLER-16146951/air-tight-tiffin-box-500x500.jpg",
      "url": "https://itbook.store/books/9781118027806"
    },
    {
      "title": "Getting an Information Security Job For Dummies",
      "subtitle": "",
      "isbn13": "9781119002819",
      "price": "190.74",
      "image": "https://cpimg.tistatic.com/05210899/b/4/school-tiffin-box.png",
      "url": "https://itbook.store/books/9781119002819"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "130.17",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31tZiCj4YqL.jpg"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "130.17",
      "image": "http://www.globalcafeleeds.org.uk/image/cache/data/category_15/minnie-mouse-girls-school-lunch-box-sandwich-bag-sports-bottle-set-red-new-b008ux7qi8-500x500-product_popup.jpg"
    },
    {
      "title": "Artificial Intelligence For Dummies",
      "subtitle": "Step into the future with AI",
      "isbn13": "9781119467656",
      "price": "180.17",
      "image": "http://takencity.com/wp-content/uploads/2017/09/19577.jpg"
    }
  ]
  constructor(private booksService: DashboardService) { }

  ngOnInit() {
    // this.booksService.getBooks('India').subscribe(res => {
    //   this.Books = res.items;
    // });

  }

}
