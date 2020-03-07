import { HelperService } from './../../services/helper-service/helper.service';
import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SettingService} from '../../services/setting.service'
import { PopoverController, IonRouterOutlet, Platform, ModalController, NavController, AlertController } from '@ionic/angular';
import {ProfileSettingComponent } from '../../shared-component/shared-component/header/profile-setting/profile-setting.component';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {

  selectedPath = '';
  pages = [
    {
      title: 'Home',
      url: '/',
      icon:'home',
      navigation:false
    },
    {
      title: 'Login',
      url: '/login',
      icon:'home',
      navigation:false
    },
    {
      title: 'Register',
      url: '/register',
      icon:'home',
      navigation:false
    },
    {
      title: 'Home',
      url: '/master/home',
      icon:'home',
      navigation:true
    },
    {
      title: 'Celebration',
      children: [
        {
          title: 'Combos',
          url: '/master/celebration/celebration-combos',
          icon: 'home',
          navigation:false
        },
        {
          title: 'Birthday',
          url: '/master/celebration/birthday',
          icon: 'gift',
          navigation:true
        },
        {
          title: 'Anniversary',
          url: '/master/celebration/anniversary',
          icon: 'gift',
          navigation:true
        }
      ]
    },
    {
      title: 'News',
      url: '/master/news',
      icon:'globe',
      navigation:true
    },
    // {
    //   title: 'Travel',
    //   children: [
    //     {
    //       title: 'Car Rent Service',
    //       url: '/master/rent-service/car-service',
    //       icon: 'car',
    //       navigation:true
    //     }
    //   ]
    // },
    {
      title: 'Travel',
      children: [
        {
          title: 'Car Rent Service',
          url: '/master/rent-service/service',
          icon: 'car',
          navigation:true
        }
      ]
    },
    {
      title: 'Books',
      url: '/master/books',
      icon:'globe',
      navigation:false
    },
    {
      title: 'Authors',
      url: '/master/authors',
      icon:'globe',
      navigation:false
    },
    {
      title: 'Book Store',
      children: [
        {
          title: 'Books',
          url: '/master/bookstore/books',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'Accesories',
          url: '/master/bookstore/accesories',
          icon: 'journal',
          navigation:true
        },
        // {
        //   title: 'Private school books',
        //   url: '/master/language/odia',
        //   icon: 'journal',
        //   navigation:true
        // },
      ]
    },
    {
      title: 'School Books',
      url: '/master/language/hindi',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'College Books',
      url: '/master/language/english',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Private school books',
      url: '/master/language/odia',
      icon: 'journal',
      navigation:false
    },

  
    {
      title: 'Education',
      children: [
        {
          title: 'My School',
          url: '/master/my-school',
          icon:'business',
          navigation:true,
        },
        {
          title: 'Authors',
          url: '/master/authors',
          icon:'globe',
          navigation:true
        },
        {
          title: 'Story Board',
          url: '/master/story-board',
          icon:'paw',
          navigation:true
        },
      ]
    },

    {
      title: 'Cart',
      url: '/master/cart',
      icon:'cart',
      navigation:true
    }
  ];
  admin= [
    {
      title: 'Admin',
      children: [
        {
          title: 'Configuration',
          url: '/master/admin/configuration',
          icon: 'cog',
          navigation:true
        },
        {
          title: 'Inventory',
          url: '/master/admin/inventory',
          icon: 'filing',
          navigation:true
        },
        {
          title: 'Request',
          url: '/master/admin/orders',
          icon: 'medkit',
          navigation:true
        },
        {
          title: 'Users',
          url: '/master/admin/users',
          icon: 'contacts',
          navigation:true
        },
      ]
    }
  ]
 public Title="";
  public user;
  username: any;
  role: any;
  userLogin: boolean = false;
  email:any;
  dataReturned: any;
  constructor(private router: Router, private setting:SettingService,private renderer: Renderer2, public popoverCtrl: PopoverController,private routerOutlet: IonRouterOutlet,private helperService:HelperService,public plt: Platform,public fAuth: AngularFireAuth,public modalController: ModalController, public navCtrl: NavController, private httpClient: HttpClient, private alertCtrl: AlertController) {

  }

ionViewWillEnter() {
   this.routerOutlet.swipeGesture = false;
}

ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
}
  public toggleTheme(status) {
   // this.renderer.setElementClass(document.body, 'dark', status?false:true);
  }
  ngOnInit() {
    this.plt.ready().then(() => {
      this.helperService.getSession().then(user=>{
        if(user && user.length>0){
          this.username = user[0].user.firstName;
          this.role = user[0].user.role;
          this.email = user[0].user.email;
          this.userLogin = true;
        }
        else{
          this.userLogin = false;
        }
      });
    });
  }
  // ngAfterViewInit() {
  //  this.setTitle();
  // }
  // public setTitle(){
  //   this.router.events.subscribe((event: RouterEvent) => {
  //     if (event && event.url) {
  //       let path = this.pages.filter(item=>{
  //           return item.url== event.url;
  //       });
  //       this.Title = path[0].title;
  //       this.selectedPath = event.url;
        
  //     }
  //   });
  // }
  // async presentPopover(ev) {
  //   const popover = await this.popoverCtrl.create({
  //     component: ProfileSettingComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }
  async presentPopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: ProfileSettingComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  public login(){
     this.openModal();
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: LoginPage,
      componentProps: {
        "paramTitle": "Login",
        from:'Nav'
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      this.ngOnInit();
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });
 
    return await modal.present();

}
  public logout() {
    this.fAuth.auth.signOut();
    this.helperService.clearStorage();
    this.ngOnInit();
   // this.openModal();
    //this.router.navigateByUrl('/login');
  }

}
