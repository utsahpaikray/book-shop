
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, Platform } from '@ionic/angular';
import { DashboardService } from '../../../services/dashboard.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-my-school-list',
  templateUrl: './my-school-list.page.html',
  styleUrls: ['./my-school-list.page.scss'],
  providers: [DashboardService]
})
export class MySchoolListPage implements OnInit {
  schoolList: any[];
  @ViewChild(IonSlides) slides: IonSlides;
  private fileTransfer: FileTransferObject;
  downloadFile: any;
  constructor(private _router: Router, private quotes: DashboardService, private transfer: FileTransfer, private file: File, private platform: Platform, private fileOpener: FileOpener,) { }
  movies = [
    {
      title: 'Episode I - The Phantom Menace',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
    },
    {
      title: 'Episode II - Attack of the Clones',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
    },
    {
      title: 'Episode III - Revenge of the Sith',
      poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
    },
    {
      title: 'Episode IV - A New Hope',
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
    },
    {
      title: 'Episode V - The Empire Strikes Back',
      poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
    },
    {
      title: 'Episode VI - Return of the Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
    },
    {
      title: 'Episode VII - The Force Awakens',
      poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
    },
    {
      title: 'Episode VIII - The Last Jedi',
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
    }
  ];
  ngOnInit() {
    // this.quotes.getQuoates().subscribe(res => { 
    //  // this.quotes = res.articles;
    // });
   
    this.schoolList =[
      {
        area:'Banpur',
        children:[
          {
            name: 'Bhalipada School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
            name: 'BHATAPADA School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
            },
            {
            name: 'BHETESWAR School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
            },
            {
            name: 'BINJHALA School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
            },
            {
            name: 'BISNUDIHA School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
            },
            {
            name: 'DINABANDHUPUR School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
            name: 'NACHUNI School'
            },
            {
            name: 'NARENDRAPUR School',
            poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
            name: 'GAMBHARIMUNDA School'
            },
            {
            name: 'KUMARANGA School'
            },
            {
            name: 'PADANPUR School'
            },
            {
            name: 'PRATAP School'
            },
            {
            name: 'RAMPUR School'
            },
            {
            name: 'RAGHUNATHPUR School'
            },
          {
            name: 'Sri AUROBINDO PURNANGA S. KENDRA School'
            },
            {
            name: 'HARIJAN SAHI P School'
            },
            {
            name:  'DR. RADHA CHARAN P  School'
            },
            {
            name: 'J.C. GIRLS High School'
            },
            {
            name: 'BALUGAON GIRLS M E School'
            },
            {
            name: 'CHILIKA RANI ENG. MED. School'
            }
        ]
      },
      {
        area:'Balugaon',
        children:[
          {
            name:  'DR. RADHA CHARAN P School'
            },
            {
            name: 'GOPABANDHU COLONY PP School'
            },
            {
            name:  'SANTARAPUR  P School'
            },
            {
            name:  'LITTLE WORLD ENG. MED. SCH. School'
            },
            {
            name: 'KANHEITARAI PROJECT P School'
           },
            {
            name: 'PRAJNATEERTHA PUBLIC  School'
           }
        ]
      },
      {
        area:'Chilika',
        children:[
          {
            name: 'SARALAPADAR  P  School'
           },
            {
            name: 'SANTINAGAR PROJECT  PS  School'
           },
            {
            name: 'SRI SATYA SAI VIDYA MANDIR  School'
           },
            {
            name:' SU-DISHA VIDYA VIHAR  PS  School'
           },
            {
            name: 'UMA MAHESWAR PUR   PS  School'
           },
            {
            name: 'VENKATESWAR School'
           },
            {
            name: 'VIVEKANANDA VIDYAMANDIR  School'
           }
        ]
      }     
  ]
  }
public schoolDetails(name){
  this._router.navigate(['master/my-school/details']);
}
ngAfterViewInit() {
  this.slides.startAutoplay();
}
drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
  moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
}
public download(fileName, filePath) {
  this.platform.ready().then(() => {
  let url = encodeURI(filePath);
  this.fileTransfer = this.transfer.create();
  this.fileTransfer.download(url, this.file.dataDirectory + fileName, true).then((entry) => {
    //here logging our success downloaded file path in mobile. 
    console.log('download completed: ' + entry.toURL());
    // open downloaded file 
    this.downloadFile = entry.toURL();
    this.fileOpener.open(this.downloadFile,'application/pdf');
    
  }).catch((error) => {
    //here logging an error. 
    console.log('download failed: ' + JSON.stringify(error));
  });
});
}
public downloadHandler() {
  this.platform.ready().then(() => {
  // To download the PDF file
    this.download('DownloadFile.pdf', 'http://www.africau.edu/images/default/sample.pdf');
  
  //To download the image file

    //this.download('Downloadimage.png', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png');
  });
  }
}
