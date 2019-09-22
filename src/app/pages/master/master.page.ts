import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

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
      url: '/master/home',
      icon:'home'
    },
    {
      title: 'Cart',
      url: '/master/cart',
      icon:'cart'
    },
    {
      title: 'News',
      url: '/master/news',
      icon:'globe'
    },
    {
      title: 'Language',
      children: [
        {
          title: 'Hindi',
          url: '/master/language/hindi',
          icon: 'logo-ionic'
        },
        {
          title: 'English',
          url: '/master/language/english',
          icon: 'logo-google'
        },
        {
          title: 'Odia',
          url: '/master/language/odia',
          icon: 'logo-google'
        },
      ]
    },
    {
      title: 'My School',
      url: '/master/my-school',
      icon:'globe'
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {

  }

}
