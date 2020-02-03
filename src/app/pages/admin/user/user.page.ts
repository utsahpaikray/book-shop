import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: any;
  dataSource;
  displayedColumns = ['Name','Email','Contact','Role','Status','star'];
  constructor(private crudService: FirebaseServiceService,private _bottomSheet: MatBottomSheet,private _authService: AuthenticationService,private _toastr: ToasterService) { }

  ngOnInit() {
    this.getUser();
  }
  public getUser() {
    this.crudService.getUser().subscribe(res=>{
      this.dataSource = this.mapObject(res);
      console.log(this.dataSource)
    })
  }
  public mapObject(item){
    return item.map(e => {
      return {
        id: e.payload.doc.id,
        Name : `${e.payload.doc.data()['firstName']} ${e.payload.doc.data()['lastName']}`,
        firstName:e.payload.doc.data()['firstName'],
        lastName:e.payload.doc.data()['lastName'],
        password:e.payload.doc.data()['password'],
        Contact : e.payload.doc.data()['mobileNumber'],
        Role : e.payload.doc.data()['role'],
        Email : e.payload.doc.data()['email'],
        Status:e.payload.doc.data()['status']
      };
    })
  }
  public update_UserStatus(record,status){
    let updateRecord = {
      firstName:record.firstName,
      lastName:record.lastName,
      mobileNumber:record.Contact,
      password:record.password,
      role:record.Role,
      status:status
    };
     this.crudService.update_user(record.id,updateRecord);
  }

}

