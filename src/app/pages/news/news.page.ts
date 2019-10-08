import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  providers: [DashboardService]
})
export class NewsPage implements OnInit {
  NewsEverything: any;
  searchQuery = '';
 
  constructor(private newsService: DashboardService, private refs: ChangeDetectorRef, private loader: LoaderService) { }

  ngOnInit() {
    this.loader.presentLoading();
    this.refs.markForCheck();
    this.newsService.getEverythingNews('india').subscribe(res => {
      this.NewsEverything = res.articles;
      if(this.loader){
        this.loader.dismissloading();
      }
    });
  }
public onInput(){
  this.newsService.getEverythingNews(this.searchQuery).subscribe(res => {
    this.NewsEverything = res.articles;
  });
  console.log(this.searchQuery);

}
}
