import { Component, OnInit, Renderer } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { SettingService} from '../../services/setting.service'
import { PopoverController } from '@ionic/angular';
import {ProfileSettingComponent } from '../../shared-component/shared-component/header/profile-setting/profile-setting.component';

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
          title: 'Hindi',
          url: '/master/language/hindi',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'English',
          url: '/master/language/english',
          icon: 'journal',
          navigation:true
        },
        {
          title: 'Odia',
          url: '/master/language/odia',
          icon: 'journal',
          navigation:true
        },
      ]
    },
    {
      title: 'Hindi',
      url: '/master/language/hindi',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'English',
      url: '/master/language/english',
      icon: 'journal',
      navigation:false
    },
    {
      title: 'Odia',
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
  ];
  Title: any;

  constructor(private router: Router, private setting:SettingService,private renderer: Renderer, public popoverCtrl: PopoverController) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        let path = this.pages.filter(item=>{
            return item.url== event.url;
        });
        this.Title = path[0].title;
        this.selectedPath = event.url;
      }
    });
  }
  public toggleTheme(status) {
    this.renderer.setElementClass(document.body, 'dark', status?false:true);
  }
  ngOnInit() {
     this.toggleTheme(true);
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
