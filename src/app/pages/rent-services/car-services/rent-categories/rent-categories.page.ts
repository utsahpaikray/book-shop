import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { TravelSubCategoryComponent } from '../../shared-component/travel-sub-category/travel-sub-category.component';

@Component({
  selector: 'app-rent-categories',
  templateUrl: './rent-categories.page.html',
  styleUrls: ['./rent-categories.page.scss'],
})
export class RentCategoriesPage implements OnInit {
  public rentCategory=[
    {
      name:'Bus',
      image: "https://www.windshieldexperts.com/car-models/wp-content/uploads/2019/01/bus-1.jpg",
      url: "https://itbook.store/books/9780764579080"
    },
    {
      name:'Car',
      "image": "https://www.windshieldexperts.com/car-models/wp-content/uploads/2019/01/tiago.jpg",
      "url": "https://itbook.store/books/9780764598753"
    },
    {
      name:'Ambulance',
      "image": "https://www.freeiconspng.com/uploads/healthcare-ambulance-icon-2.png",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      name:'Auto',
      "image": "https://papermilkdesign.com/images/car-png-bajaj-19.png",
      "url": "https://itbook.store/books/9780980285826"
    },
    {
      name:'Tempo',
      "image": "http://www.centromanufacturing.com/wp-content/uploads/2018/09/TATA-Modern-PUV-Class-I-600x600.jpg",
      "url": "https://itbook.store/books/9780980285826"
    }
  ]
  constructor(private _bottomSheet: MatBottomSheet,private _authService: AuthenticationService,private _toastr: ToasterService) { }

  ngOnInit() {
  }
  public showSubCategory(){
    const bottomSheetRef=  this._bottomSheet.open(TravelSubCategoryComponent,{
      disableClose: false,
      panelClass: 'bottom-sheet',
      data: { names: ['Frodo', 'Bilbo'] },
    });
    bottomSheetRef.afterDismissed().subscribe((data) => {
      this._authService.createRole(data);
    });
  }

}
