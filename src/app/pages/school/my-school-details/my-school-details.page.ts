import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-my-school-details',
  templateUrl: './my-school-details.page.html',
  styleUrls: ['./my-school-details.page.scss'],
})
export class MySchoolDetailsPage implements OnInit {
  facultyList: {}[];
  @ViewChild('Gallery') Gallery: IonSlides;
  @ViewChild('eventGallery') eventGallery: IonSlides;
 
  constructor() { }

  ngOnInit() {
    this.facultyList=[
      {
        position:'Principal',
        profileImage:'assets/pic1.png'
      },
      {
        position:'Mathematics',
        profileImage:'assets/pic2.png'
      },
      {
        position:'Odia',
        profileImage:'assets/pic8.png'
      },
      {
        position:'English',
        profileImage:'assets/pic7.png'
      },
      {
        position:'General Science',
        profileImage:'assets/pic3.png'
      },
      {
        position:'Social Science',
        profileImage:'assets/pic4.png'
      },
      {
        position:'History',
        profileImage:'assets/pic5.png'
      },
      {
        position:'Geography',
        profileImage:'assets/pic7.png'
      }
    ];
  }
  ngAfterViewInit() {
    this.Gallery.startAutoplay();
    this.eventGallery.startAutoplay();
  }
}
