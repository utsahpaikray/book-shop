import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-odia',
  templateUrl: './odia.page.html',
  styleUrls: ['./odia.page.scss'],
})
export class OdiaPage implements OnInit {
  Books: any;

  constructor(private booksService: DashboardService) { }

  ngOnInit() {
    this.booksService.getBooks('India').subscribe(res => {
      this.Books = res.items;
    });
  }

}
