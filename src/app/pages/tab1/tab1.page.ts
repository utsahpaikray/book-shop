import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, Platform } from '@ionic/angular';
import { AddToCartModalPage } from '../../shared-component/shared-component/add-to-cart-modal/add-to-cart-modal.page';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public users =
  [{
    'name': 'Aline Grover',
    'created': 'November 28, 2012'
  }, {
    'name': 'Nevada Anders',
    'created': 'January 18, 2014'
  }, {
    'name': 'Nicholas Morissette',
    'created': 'November 11, 2014'
  }, {
    'name': 'Rusty Umland',
    'created': 'January 8, 2019'
  }, {
    'name': 'Amada Cerulli',
    'created': 'July 22, 2009'
  }, {
    'name': 'Harriette Garcia',
    'created': 'July 29, 2018'
  }, {
    'name': 'Erminia Marotz',
    'created': 'September 29, 2016'
  }, {
    'name': 'Shanelle Parodi',
    'created': 'May 26, 2018'
  }, {
    'name': 'Roger Leite',
    'created': 'August 6, 2015'
  }, {
    'name': 'Latina Faulcon',
    'created': 'February 5, 2014'
  }, {
    'name': 'Jerrie Hoekstra',
    'created': 'June 2, 2016'
  }, {
    'name': 'Domonique Byam',
    'created': 'December 30, 2010'
  }, {
    'name': 'Monnie Bonar',
    'created': 'December 20, 2018'
  }, {
    'name': 'Chu Kahle',
    'created': 'November 17, 2017'
  }, {
    'name': 'Allan Passman',
    'created': 'November 12, 2015'
  }, {
    'name': 'Conrad Caliendo',
    'created': 'February 10, 2016'
  }, {
    'name': 'Elma Chenier',
    'created': 'August 13, 2011'
  }, {
    'name': 'Wendi Hirano',
    'created': 'July 27, 2018'
  }, {
    'name': 'Loren Wordlaw',
    'created': 'December 20, 2014'
  }, {
    'name': 'Hubert Frum',
    'created': 'January 21, 2013'
  }, {
    'name': 'Rueben Basil',
    'created': 'December 2, 2013'
  }, {
    'name': 'Krystyna Hardiman',
    'created': 'February 11, 2016'
  }, {
    'name': 'Micki Murch',
    'created': 'December 17, 2009'
  }, {
    'name': 'Allene Knight',
    'created': 'November 3, 2010'
  }, {
    'name': 'Davis Lunsford',
    'created': 'October 17, 2011'
  }, {
    'name': 'Elin Conte',
    'created': 'June 23, 2015'
  }, {
    'name': 'Yasuko Hites',
    'created': 'August 25, 2017'
  }, {
    'name': 'Gerri Pinon',
    'created': 'May 21, 2014'
  }, {
    'name': 'Caryl Hawker',
    'created': 'April 13, 2018'
  }, {
    'name': 'Savannah Hoard',
    'created': 'October 31, 2009'
  }, {
    'name': 'Carolyn Knutsen',
    'created': 'July 16, 2015'
  }, {
    'name': 'Shantay Mckissack',
    'created': 'July 9, 2010'
  }, {
    'name': 'Vertie Pinales',
    'created': 'November 20, 2010'
  }, {
    'name': 'Gidget Stuck',
    'created': 'August 17, 2017'
  }, {
    'name': 'Drew Crownover',
    'created': 'August 30, 2017'
  }, {
    'name': 'Vashti Krajewski',
    'created': 'January 25, 2018'
  }, {
    'name': 'Candice Dike',
    'created': 'November 19, 2018'
  }, {
    'name': 'Dorthey Buhler',
    'created': 'October 22, 2012'
  }, {
    'name': 'Hailey Deluna',
    'created': 'September 13, 2012'
  }, {
    'name': 'Richard Aaron',
    'created': 'April 27, 2016'
  }];
  dataReturned:any;
  userss;

  constructor( public modalController: ModalController, public navCtrl: NavController, private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController, private authors: DashboardService) {
    // this.userss = this.httpClient.get('https://randomuser.me/api/?results=20').subscribe(res => res['results']);
    // console.log(this.userss)

 }

  ngOnInit() {
    this.authors.getAuthors().subscribe(res => { 
      console.log(res.results)
      this.userss = res.results;
    });
    // this.authors.getAuthors().pipe(
    //   map(response => {
    //     console.log(response)
    //     this.userss = response.results
    //     return this.userss;
    //   }));
    }
  async openModal(user,index) {
    const modal = await this.modalController.create({
      component: AddToCartModalPage,
      componentProps: {
        "Name": user.name,
        "paramTitle": "Add To Cart",
        "index": index
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
