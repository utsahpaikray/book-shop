import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';

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
  constructor(private _router: Router, private quotes: DashboardService, private transfer: FileTransfer, private file: File, private platform: Platform, private fileOpener: FileOpener,private crudService: FirebaseServiceService) { }
  ngOnInit() {
    // this.quotes.getQuoates().subscribe(res => { 
    //  // this.quotes = res.articles;
    // });
    this.crudService.read_SchoolList().subscribe(resp => {
      console.log(resp)
      this.schoolList = this.mapObject(resp);
      console.log(this.schoolList)
    })
  
  }
public schoolDetails(name){
  this._router.navigate(['master/my-school/details/1']);
}
ngAfterViewInit() {
  this.slides.startAutoplay();
 // this.CreateRecord();
}
drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
 // moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
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
public CreateRecord() {
    let endPoint ='my-school-list'
    this.schoolList.forEach(item => {
    this.crudService.pushBookStoreItems(item,endPoint).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });

    });
  }
  public mapObject(item){
    return item.map(e => {
      console.log(e.payload.doc.data())
      return {
        id: e.payload.doc.id,
        area: e.payload.doc.data()['area'],
        schools: e.payload.doc.data()['schools']
      };
    })
  }
}
