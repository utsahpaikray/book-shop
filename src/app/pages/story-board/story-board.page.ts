import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, Platform, NavController } from '@ionic/angular';
import { PdfViewerPage } from '../../shared-component/pdf-viewer/pdf-viewer.page';

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

}
