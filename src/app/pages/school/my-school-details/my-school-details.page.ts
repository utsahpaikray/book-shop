import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, Platform, AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import {PDFProgressData, PDFDocumentProxy, PDFSource} from 'ng2-pdf-viewer';
@Component({
  selector: 'app-my-school-details',
  templateUrl: './my-school-details.page.html',
  styleUrls: ['./my-school-details.page.scss']
})
export class MySchoolDetailsPage implements OnInit {
  facultyList: {}[];
  // @ViewChild('Gallery') Gallery: IonSlides;
  @ViewChild('eventGallery') eventGallery: IonSlides;
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  
  storageDirectory: string = '';
  image: any;
  doc: Document;
  pdfSrc: string | PDFSource | ArrayBuffer = 'http://uploads.worldlibrary.org/uploads/pdf/20171028052721pancha_tantra___4__madhuri_adhikary.pdf';
    // pdfSrc: any = {
  //   url: '../../../../assets/5-simple-hacks-LBT.pdf',
  //   withCredentials: true,
  //// httpHeaders: { // cross domain
  ////   'Access-Control-Allow-Credentials': true
  //// }
  // };
  error: any;
  page = 1;
  rotation = 0;
  zoom = 1;
  originalSize = false;
  pdf: any;
  renderText = true;
  progressData: PDFProgressData;
  isLoaded = false;
  stickToPage = false;
  showAll = false;
  autoresize = true;
  fitToPage = false;
  outline: any[];
  isOutlineShown = false;
  pdfQuery = '';
 
  //constructor() { }
  constructor(private document: DocumentViewer,  private platform: Platform, private file: File, private transfer:FileTransfer, private fileOpener: FileOpener,  public alertCtrl: AlertController) {
    this.platform.ready().then(() => {

      if (this.platform.is('ios')) {
        this.storageDirectory = this.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = this.file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
   }
 
  ngOnInit() {
    this.facultyList=[
      {
        position:'Principal',
        profileImage:'assets/pic1.png',
        Name:'Niranjan'
      },
      {
        position:'Mathematics',
        profileImage:'assets/pic2.png',
        Name:'Niranjan'
      },
      {
        position:'Odia',
        profileImage:'assets/pic8.png',
        Name:'Niranjan'
      },
      {
        position:'English',
        profileImage:'assets/pic7.png',
        Name:'Niranjan'
      },
      {
        position:'General Science',
        profileImage:'assets/pic3.png',
        Name:'Prtiam Kumar'
      },
      {
        position:'Social Science',
        profileImage:'assets/pic4.png',
        Name:'Mahinder Biswal'
      },
      {
        position:'History',
        profileImage:'assets/pic5.png',
        Name:'Prabhod Swain'
      },
      {
        position:'Geography',
        profileImage:'assets/pic7.png',
        Name:'Siba Kumar'
      }
    ];
    this.createBarChart();
  }
  ionViewDidEnter() {
   
    this.updateChart();
  }
  ngAfterViewInit() {
   // this.Gallery.startAutoplay();
    this.eventGallery.startAutoplay();
    
  }
  public createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        datasets: [{
          label: 'Students in hundred',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(153, 150, 255, 0.2)',
            'rgba(255, 180, 20, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  public updateChart(){
    this.bars.update({
      duration: 800,
      easing: 'easeOutBounce'
  });
  }


downloadImage(image) {

  this.platform.ready().then(() => {

    const fileTransfer: FileTransferObject = this.transfer.create();

    const imageLocation = `${this.file.applicationDirectory}www/assets/${image}`;
    fileTransfer.download(imageLocation, this.storageDirectory + image, true).then((entry) => {
       console.log(`${image} was successfully downloaded to: ${entry.toURL()}`);
      
    }, (error) => {

      
        console.log(`${image} was not successfully downloaded. Error code: ${error.code}`);
    });

  });

}

retrieveImage(image) {
  const imageLocation = `${this.file.applicationDirectory}www/assets/${image}`;
  this.file.checkFile(imageLocation, image)
    .then(() => {
      
        console.log(`${image} was successfully retrieved from: ${this.storageDirectory}`);
        this.image=(<any>window).Ionic.WebView.convertFileSrc(image);

    })
    .catch((err) => {

    console.log(`${image} was not successfully retrieved. Error Code: ${err.code}`);

    });
}

  public showPdf(){
    this.platform.ready().then(() => {
     // console.log(this.doc)
    let downloadUrl= 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    let path= this.file.externalRootDirectory;
    let random = Math.floor(Math.random() * 100);
    this.file.createDir(this.file.externalRootDirectory, `${random}my_downloads`, false).then(response => {
      console.log('Directory created',response);
      const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(downloadUrl,`${path}${random}my_downloads/myfile.pdf`, true).then(entry=>{
      console.log(entry);
      let url = entry.toURL();
      if(this.platform.is('ios')){
        this.document.viewDocument(url, 'application/pdf', {});
      }else{
        console.log(url)
        this.document.viewDocument(url, 'application/pdf', {});
      //  this.fileOpener.open(url,'application/pdf');
      }
    },(error) => {
      console.log("An error has occurred: Code = " + error.code);
      console.log("upload error source " + error.source);
      console.log("upload error target " + error.target);
    //  const newpath = path+'5-simple-hacks-LBT.pdf';
    //  this.fileOpener.open(newpath,'application/pdf');
      });
    }).catch(err => {
      console.log('Could not create directory "my_downloads" ',err);
    });
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(downloadUrl,`${path}Download/myfile.pdf`, true).then(entry=>{
console.log(entry)
    });

  //   const options: DocumentViewerOptions = {
  //     title: 'My PDF'
  //   }
  //   // let path = null;
  //   if(this.platform.is('ios')){
  //     path = this.file.documentsDirectory;
  //   }else{
  //     path = this.file.dataDirectory;
  //   }
  // //  const transfer = this.transfer.create();
  //   transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf',path+'myfile.pdf').then(entry=>{
  //     console.log(entry);
  //     let url = entry.toURL();
  //     this.document.viewDocument(url, 'application/pdf', options);
  //   });
});
   
   
  }
 public openLocalPdf(){
  this.platform.ready().then(() => {
    let filepath= this.file.applicationDirectory+ 'www/assets';
  // if(this.file.applicationDirectory!=null){
  //       if(this.platform.is('android')){
  //         console.log(filepath);
  //         console.log(this.file)
  //       let fakename= Date.now();
  //       this.file.copyFile(filepath,'5-simple-hacks-LBT.pdf', this.file.externalApplicationStorageDirectory,`${fakename}.pdf`).then(result=>{
  //         console.log(result)
  //         this.fileOpener.open(result.nativeURL,'application/pdf');
  //       },(error)=>{
  //         console.log("An error has occurred: Code = " + error.code);
  //         console.log("upload error source " + error.source);
  //         console.log("upload error target " + error.target);
  //         const newpath = this.file.externalApplicationStorageDirectory+'5-simple-hacks-LBT.pdf';
  //         this.fileOpener.open(newpath,'application/pdf');
  //       })
  //       }else{
  //         const options: DocumentViewerOptions = {
  //           title: 'My PDF'
  //         }
  //         this.document.viewDocument(`${filepath}/5-simple-hacks-LBT.pdf`, 'application/pdf', options);
  //       }
  //  }
  const options: DocumentViewerOptions = {
    title: 'My PDF'
  }
  this.document.viewDocument(`${filepath}/5-simple-hacks-LBT.pdf`, 'application/pdf', options)
  });
  }
  // public downloadDoc(doc: Document) {
  //   this.doc = doc;
  
  //     this.file.createDir(this.file.externalRootDirectory, 'my_downloads', false).then(response => {
  //     console.log('Directory created',response);
  //     const fileTransfer: FileTransferObject = this.transfer.create();
  //       fileTransfer.download(this.doc.URL,this.file.externalRootDirectory + '/my_downloads/' + this.doc.name + '.docx').then((entry) => {
  //         console.log('file download response',entry);
  //       })
  //       .catch((err) =>{
  //         console.log('error in file download',err);
  //       });
  
  //   }).catch(err => {
  //     console.log('Could not create directory "my_downloads" ',err);
  //   }); 
  //  }
  loadPdf() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/assets/pdf-test.pdf', true);
    xhr.responseType = 'blob';

    xhr.onload = (e: any) => {
      console.log(xhr);
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        this.pdfSrc = URL.createObjectURL(blob);
      }
    };

    xhr.send();
  }


  incrementPage() {
    this.page += 1;
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }

  rotate(angle: number) {
    this.rotation += angle;
  }

  /**
   * Render PDF preview on selecting file
   */
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  /**
   * Get pdf information after it's loaded
   * @param pdf
   */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;

    this.loadOutline();
  }

  /**
   * Get outline
   */
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }


  /**
   * Pdf loading progress callback
   * @param {PDFProgressData} progressData
   */
  onProgress(progressData: PDFProgressData) {
    console.log(progressData);
    this.progressData = progressData;

    this.isLoaded = progressData.loaded >= progressData.total;
    this.error = null; // clear error
  }

  getInt(value: number): number {
    return Math.round(value);
  }

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }


}
