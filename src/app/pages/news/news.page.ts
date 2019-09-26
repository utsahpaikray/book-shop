import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  providers: [DashboardService]
})
export class NewsPage implements OnInit {
  NewsEverything: any;
  searchQuery = '';
 
  constructor(private newsService: DashboardService, private refs: ChangeDetectorRef) { }

  ngOnInit() {
    this.refs.markForCheck();
    this.newsService.getEverythingNews('india').subscribe(res => {
      this.NewsEverything = res.articles;
    });
  }
public onInput(event){
  this.newsService.getEverythingNews(this.searchQuery).subscribe(res => {
    this.NewsEverything = res.articles;
  });
  console.log(this.searchQuery);

}
}
