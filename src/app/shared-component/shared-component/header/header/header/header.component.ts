import { Component, OnInit } from '@angular/core';
import { Renderer, AfterViewInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SettingService} from '../../../../../services/setting.service'
import { PopoverController, IonRouterOutlet } from '@ionic/angular';
import {ProfileSettingComponent } from '../../../../../shared-component/shared-component/header/profile-setting/profile-setting.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
EoniaImg ="https://firebasestorage.googleapis.com/v0/b/aonia-f2fe4.appspot.com/o/eonia.png?alt=media&token=c5823629-6536-44a7-bfcb-6bf0bebb407c"
  selectedPath = '';
  public projectName='Eonia';
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
          title: 'Private school Books',
          url: '/master/language/odia',
          icon: 'journal',
          navigation:true
        },
      ]
    },
    {
      title: 'Admin',
      children: [
        {
          title: 'Configuration',
          url: '/master/admin/configuration',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'Inventory',
          url: '/master/admin/inventory',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'Orders',
          url: '/master/admin/orders',
          icon: 'journal',
          navigation:true
        },
      ]
    },
    {
      title: 'Books',
      url: '/master/bookstore/books',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Book Accesories',
      url: '/master/bookstore/accesories',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Private school Books',
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
    },
    {
      title: 'Configuration',
      url: '/master/admin/configuration',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Inventory',
      url: '/master/admin/inventory',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Request',
      url: '/master/admin/orders',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Users',
      url: '/master/admin/users',
      icon: 'contacts',
      navigation:false
    },
    {
      title: 'Car Rent Service',
      url: '/master/rent-service/car-service',
      icon: 'car',
      navigation:true
    },
    {
      title: 'Rent Service',
      url: '/master/rent-service/service',
      icon: 'car',
      navigation:true
    },
    {
      title: 'Combos',
      url: '/master/celebration/celebration-combos',
      icon: 'journal',
      navigation:true
    },
    {
      title: 'Birthday',
      url: '/master/celebration/birthday',
      icon: 'journal',
      navigation:true
    },
    {
      title: 'Anniversary',
      url: '/master/celebration/anniversary',
      icon: 'journal',
      navigation:true
    },
    {
      title: 'Story Board',
      url: '/master/story-board',
      icon:'paw',
      navigation:true
    }
  ];
 
 public Title="";
  constructor(private router: Router, private setting:SettingService,private renderer: Renderer, public popoverCtrl: PopoverController,private routerOutlet: IonRouterOutlet) {
  }
  public toggleTheme(status) {
    this.renderer.setElementClass(document.body, 'dark', status?false:true);
  }
  ngOnInit() {
     this.toggleTheme(true);
     this.setTitle();
  }
  public setTitle(){
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        let path = this.pages.filter(item=>{
            return event.url.includes(item.url);
        });
        this.Title = path[path.length-1].title;
        this.selectedPath = event.url;
        
      }
    });
  }
  async presentPopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: ProfileSettingComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}



