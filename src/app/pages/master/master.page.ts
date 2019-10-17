import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SettingService} from '../../services/setting.service'
import { PopoverController, IonRouterOutlet } from '@ionic/angular';
import {ProfileSettingComponent } from '../../shared-component/shared-component/header/profile-setting/profile-setting.component';
import { Observable } from 'rxjs';

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
      title: 'Cart',
      url: '/master/cart',
      icon:'cart',
      navigation:true
    },
    {
      title: 'News',
      url: '/master/news',
      icon:'globe',
      navigation:true
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
      title: 'Books',
      children: [
        {
          title: 'School Books',
          url: '/master/language/hindi',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'College Books',
          url: '/master/language/english',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'Private school books',
          url: '/master/language/odia',
          icon: 'journal',
          navigation:true
        },
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
      title: 'My School',
      url: '/master/my-school',
      icon:'business',
      navigation:true,
    },
    {
      title: 'School Details',
      url: '/master/my-school/details',
      icon:'globe',
      navigation:false
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
          title: 'Orders',
          url: '/master/admin/orders',
          icon: 'medkit',
          navigation:true
        },
      ]
    }
  ]
  rentServices= [
    {
      title: 'Rent Services',
      children: [
        {
          title: 'Car Rent Service',
          url: '/master/rent-service/car-service',
          icon: 'car',
          navigation:true
        }
      ]
    }
  ]
 public Title="";
  constructor(private router: Router, private setting:SettingService,private renderer: Renderer, public popoverCtrl: PopoverController,private routerOutlet: IonRouterOutlet) {
  }

ionViewWillEnter() {
   this.routerOutlet.swipeGesture = false;
}

ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
}
  public toggleTheme(status) {
    this.renderer.setElementClass(document.body, 'dark', status?false:true);
  }
  ngOnInit() {
    // this.toggleTheme(true);
    // this.setTitle();
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

}
