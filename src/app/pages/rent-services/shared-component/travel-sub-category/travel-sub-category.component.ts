import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { NavController } from '@ionic/angular';
import { CarRentServicesPage } from '../../car-services/car-rent-services/car-rent-services.page';

@Component({
  selector: 'app-travel-sub-category',
  templateUrl: './travel-sub-category.component.html',
  styleUrls: ['./travel-sub-category.component.scss'],
})
export class TravelSubCategoryComponent implements OnInit {

  public subCategoryList= [
    {
    Id: 44,
    MakeName: "",
    VehicleTypeId: 2,
    VehicleTypeName: "XUV",
    carImage:"https://auto.ndtvimg.com/car-images/colors/kia/seltos/kia-seltos-intelligency-blue.png",
    price:10,
   seatAvailable:'5-6'
    },
    {
    MakeId: 45,
    MakeName: "Micro",
    VehicleTypeId: 2,
    VehicleTypeName: "Micro",
    carImage:"https://auto.ndtvimg.com/car-images/big/kia/seltos/kia-seltos.jpg?v=18",
    price:10,
    seatAvailable:'3-4'
    },
    {
    MakeId: 442,
    MakeName: "Mini",
    VehicleTypeId: 2,
    VehicleTypeName: "Mini",
    carImage:"https://media.zigcdn.com/media/content/2018/Dec/nexon-2_720x540.jpg",
    price:9,
    seatAvailable:'3-4'
    },
    {
    MakeId: 443,
    MakeName: "Prime",
    VehicleTypeId: 2,
    VehicleTypeName: "Prime",
    carImage:"https://smedia2.intoday.in/btmt/images/stories/kona_660x450_052819014729.jpg",
    price:8.5,
    seatAvailable:'5-6'
    },
    {
    MakeId: 445,
    MakeName: "Luxury",
    VehicleTypeId: 2,
    VehicleTypeName: "Luxury",
    carImage:"https://cdn1.droom.in//images/news_images/2019-08-08/4df5b7e6d32706bfe23df9543247b289.jpg",
    price:9.25,
    seatAvailable:'6-7'
    },
    {
    MakeId: 448,
    MakeName: "Safari",
    VehicleTypeId: 2,
    VehicleTypeName: "Safari",
    carImage:'https://cdn.motor1.com/images/mgl/4VnvA/s1/all-new-2018-hyundai-kona.jpg',
    price:8.50,
    seatAvailable:'7-8'
    }]
  constructor(private bottomSheetRef: MatBottomSheetRef<TravelSubCategoryComponent>,
    private bottomSheet: MatBottomSheet, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private _authService: AuthenticationService, private _toastr: ToasterService, public navCtrl: NavController) { }

  ngOnInit() {
     this.data = this.subCategoryList;
  }
  closeDialog(): void {
    this.bottomSheetRef.dismiss();
 }
public motoList(){
  this.closeDialog();
  this.navCtrl.navigateRoot('/master/rent-service/car-service');
 // this.navCtrl.navigateForward(CarRentServicesPage);
}
}
