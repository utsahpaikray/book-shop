import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {
  Books: any;
  searchQuery = '';
  public standards=[
    {
      Name:'School',
      toShow:true,
      standard:[
        {value:'I'},
        {value:'II'},
        {value:'III'},
        {value:'IV'},
        {value:'V'},
        {value:'VI'},
        {value:'VII'},
        {value:'VIII'},
        {value:'IX'},
        {value:'X'},
      ]
    },
    {
      Name:'Graduation',
      toShow:false,
      standard:[
        {value:'+2 Science'},
        {value:'+2 Arts'},
        {value:'+2 Commerce'},
        {value:'+3 Science'},
        {value:'+3 Arts'},
        {value:'+3 Commerce'}
      ]
    },
    {
      Name:'Post Graduation',
      toShow:false,
      standard:[
        {value:'Science'},
        {value:'Arts'},
        {value:'Commerce'}
      ]
    }
  ]
  schoolShow: boolean = false;
  constructor(private booksService: DashboardService,  private loader: LoaderService, private toast: ToasterService, private vibration: Vibration) {
  //  this.loader.presentLoading();
   }

  ngOnInit() {
    this.booksService.getBooks('Science').subscribe(res => {
      this.Books = res.items;
    });
  }
public searchBook(){
  const query = this.searchQuery.toLowerCase();
  this.booksService.getBooks(query).subscribe(res => {
    this.Books = res.items;
  });
}
public addToCart(){
  this.toast.presentToast('Added to cart successfully','bottom', 'dark');
  this.vibration.vibrate([2000,1000,2000]);
  this.vibration.vibrate(0);
}
public segmentChanged(e){
// if(e.detail.value == 'School'){
//   this.schoolShow= true;
// }
this.standards.forEach(element => {
  if(element.Name ==e.detail.value){
    element.toShow= true; 
  }else{
    element.toShow= false; 
  }
});
}
}
