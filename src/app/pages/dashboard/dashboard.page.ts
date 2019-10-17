import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DashboardService } from '../../services/dashboard.service';
import {LoaderService } from '../../services/loader/loader.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [DashboardService]
})
export class DashboardPage implements OnInit {
  public books=[
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
  @ViewChild(IonSlides) slides: IonSlides;
  bars: any;
  colorArray: any;
  // slideOpts = {
  //   loop: true,
  //   slidesPerView: 1,
  //   coverflowEffect: {
  //     rotate: 100,
  //     stretch: 0,
  //     depth: 50,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   on: {
  //     beforeInit() {
  //       const swiper = this;
  
  //       swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
  //       swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
  //       swiper.params.watchSlidesProgress = true;
  //       swiper.originalParams.watchSlidesProgress = true;
  //     },
  //     setTranslate() {
  //       const swiper = this;
  //       const {
  //         width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
  //       } = swiper;
  //       const params = swiper.params.coverflowEffect;
  //       const isHorizontal = swiper.isHorizontal();
  //       const transform$$1 = swiper.translate;
  //       const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
  //       const rotate = isHorizontal ? params.rotate : -params.rotate;
  //       const translate = params.depth;
  //       // Each slide offset from center
  //       for (let i = 0, length = slides.length; i < length; i += 1) {
  //         const $slideEl = slides.eq(i);
  //         const slideSize = slidesSizesGrid[i];
  //         const slideOffset = $slideEl[0].swiperSlideOffset;
  //         const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
  
  //          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
  //         let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
  //         // var rotateZ = 0
  //         let translateZ = -translate * Math.abs(offsetMultiplier);
  
  //          let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
  //         let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
  
  //          // Fix for ultra small values
  //         if (Math.abs(translateX) < 0.001) translateX = 0;
  //         if (Math.abs(translateY) < 0.001) translateY = 0;
  //         if (Math.abs(translateZ) < 0.001) translateZ = 0;
  //         if (Math.abs(rotateY) < 0.001) rotateY = 0;
  //         if (Math.abs(rotateX) < 0.001) rotateX = 0;
  
  //          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  //          $slideEl.transform(slideTransform);
  //         $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
  //         if (params.slideShadows) {
  //           // Set shadows
  //           let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
  //           let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
  //           if ($shadowBeforeEl.length === 0) {
  //             $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
  //             $slideEl.append($shadowBeforeEl);
  //           }
  //           if ($shadowAfterEl.length === 0) {
  //             $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
  //             $slideEl.append($shadowAfterEl);
  //           }
  //           if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
  //           if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
  //         }
  //       }
  
  //        // Set correct perspective for IE10
  //       if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
  //         const ws = $wrapperEl[0].style;
  //         ws.perspectiveOrigin = `${center}px 50%`;
  //       }
  //     },
  //     setTransition(duration) {
  //       const swiper = this;
  //       swiper.slides
  //         .transition(duration)
  //         .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
  //         .transition(duration);
  //     }
  //   }
  //  // autoplay:400
  // };
  NewsContent: any;
  NewsEverything: any;
  pagesize=10;
  page=1;
  public loadingAnimation = "../../assets/loading.gif";
  public imgHeight = '250px';
  constructor(private newsService: DashboardService, private loader: LoaderService, private camera: Camera) { 
    this.loader.presentLoading();
  }

  ngOnInit() {
    
   
   this.getHeadlines('us',this.pagesize,this.page);
   
    this.newsService.getEverythingNews({ query: 'Science' }).subscribe(res => { 
      this.NewsEverything = res.articles;
      //if(this.loader){
         this.loader.dismissloading();
     // }
    });
    
  }
  image:any=''
  openCam(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {

     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     alert("error "+JSON.stringify(err))
    });

  }
  public getHeadlines(country,pagesize,page){
    this.newsService.getNews(country,pagesize,page).subscribe(res => {
      console.log(res)
      this.NewsContent = res.articles;
    });
  }
  ngAfterViewInit() {
    this.slides.startAutoplay();
   //this.goToSlide(1);\
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.goToSlide(currentIndex);
  }
  goToSlide(index) {
    this.slides.slideTo(index+1, 500);
  }
  public doRefresh(event) {
      this.ngOnInit();
  }
  public loadData(event) {
    this.pagesize=this.pagesize+10;
    this.getHeadlines('us',this.pagesize,this.page);
    setTimeout(() => {
      event.target.complete();
      if (this.NewsContent && this.NewsContent.articles && this.NewsContent.articles.length*this.page >= this.NewsContent.totalResults ) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
