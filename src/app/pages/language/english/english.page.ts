import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {
  Books: any;

  constructor(private booksService: DashboardService) { }

  ngOnInit() {
    this.booksService.getBooks('India').subscribe(res => {
      this.Books = res.items;
    });
  }

}
