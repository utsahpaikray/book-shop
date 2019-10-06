import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, Platform } from '@ionic/angular';
import { Chart } from 'chart.js';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
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
 
  //constructor() { }
  constructor(private document: DocumentViewer,  private platform: Platform, private file: File, private transfer:FileTransfer) { }

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

  public showPdf(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    let path = null;
    if(this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }else{
      path = this.file.dataDirectory;
    }
    console.log(path);
    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf',path+'myfile.pdf').then(entry=>{
      console.log(entry);
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', options)
    });
  
   
  //  this.document.viewDocument('https://static.careers360.mobi/media/uploads/froala_editor/files/GATE-2020-Syllabus-Computer-Science-Information-Technology.pdf', 'application/pdf', options)
  }
}
