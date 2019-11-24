import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, Platform, NavController } from '@ionic/angular';
import { PdfViewerPage } from '../../shared-component/pdf-viewer/pdf-viewer.page';
import {VideoViewerPage} from '../../shared-component/video-viewer/video-viewer.page';

@Component({
  selector: 'app-story-board',
  templateUrl: './story-board.page.html',
  styleUrls: ['./story-board.page.scss'],
})
export class StoryBoardPage implements OnInit {

  public birthdayCombos=[
    {
      "image": "https://images.assetsdelivery.com/compings_v2/prettyvectors/prettyvectors1611/prettyvectors161100111.jpg",
      "url": "https://itbook.store/books/9780764579080"
    },
    {
      "image": "https://img3.stockfresh.com/files/a/ayelet_keshet/m/82/7755496_stock-vector-black-family-reading-story.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      "image": "https://previews.123rf.com/images/olku/olku1904/olku190400007/123753585-ancient-greek-story-telling-tradition-vector-cartoon-illustration-of-bard-perfomance.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "image": "https://cdn3.vectorstock.com/i/1000x1000/97/37/woman-teachers-telling-story-to-students-vector-9939737.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "image": "https://image.freepik.com/vector-gratis/abuelos-nietos-parque_24877-10331.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
 
    {
      "image": "https://c8.alamy.com/comp/GDM35E/illustration-of-a-grandmother-reading-a-book-to-her-grandson-GDM35E.jpg",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2S4OjH-xunCThQNJkiUFOx19ag9I0FZanMSPvCHOgKIzEXMWB&s",
      "url": "https://itbook.store/books/9781118026694"
    }
  ]
  public panchatatnra = [   {
    "image": "https://m.media-amazon.com/images/I/51eGJkJ0tKL._SL500_.jpg",
    "url": "t2YRU3jOYm4"
  },
  {
    "image": "https://www.tell-a-tale.com/wp-content/uploads/2016/04/The-Greedy-Bird-810x456-1-810x456.jpg",
    "url": "gu6DgzoiyK0"
  },
{
    "image": "https://www.freemeditation.com/wp-content/uploads/2009/09/bullock-cart-story-568x320.jpg",
    "url": "VqVppo9dFnc"
  },
  {
    "image": "https://i.ytimg.com/vi/gYVNf4QJc1w/maxresdefault.jpg",
    "url": "6bD3x8-AqdU"
  },
  {
    "image": "https://www.tell-a-tale.com/wp-content/uploads/2016/02/The-Mice-That-Ate-Iron-810x456-810x456.jpg",
    "url": "kroaJ39A_2s"
  },]
  dataReturned: any;
  constructor(public modalController: ModalController, public navCtrl: NavController,private plt: Platform, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async OpenStoryBoard(combo,index) {
    const modal = await this.modalController.create({
      component: PdfViewerPage,
      componentProps: {
        "Data":'https://static.careers360.mobi/media/uploads/froala_editor/files/GATE-2020-Syllabus-Aerospace-Engineering.pdf'
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });
 
    return await modal.present();

}
  async OpenStoryVideoBoard(id) {
    const modal = await this.modalController.create({
      component: VideoViewerPage,
      componentProps: {
        "Data":id
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
