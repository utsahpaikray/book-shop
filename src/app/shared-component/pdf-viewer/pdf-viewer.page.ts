import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import {PDFProgressData, PDFDocumentProxy, PDFSource} from 'ng2-pdf-viewer';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.page.html',
  styleUrls: ['./pdf-viewer.page.scss'],
})
export class PdfViewerPage implements OnInit {
  modalTitle:string;
  model:any;
  index: any;
  pdfSrc: string | PDFSource | ArrayBuffer = 'https://www.unhcr.ca/wp-content/uploads/2014/10/poetry_book.pdf';
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
  id = 'qDuKsiwS5xw';
  private player;
  private ytEvent;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _router: Router,
   // private youtube: YoutubeVideoPlayer
  ) { }
  ngOnInit() {
    this.model = this.navParams.data.Data;
   // this.youtube.openVideo('licjBYeWKks');
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
   // this._router.navigate(['master/cart']);
  }
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
  decrementPage() {
    this.page -= 1;
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }
  decrementZoom(amount: number) {
    this.zoom -= amount;
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
