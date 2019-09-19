import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.page.html',
  styleUrls: ['./hindi.page.scss'],
})
export class HindiPage implements OnInit {
  Books: any;

  constructor(private booksService: DashboardService) { }

  ngOnInit() {
    this.booksService.getBooks('India').subscribe(res => {
      this.Books = res.items;
    });
  }

}
