
import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AddUserComponent } from '../sharedComponents/add-user/add-user.component';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { MatTableDataSource } from '@angular/material';
export interface Roles {
  name: string;
  status: boolean;
  reason:string
}

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ConfigPage implements OnInit {
  displayedColumns: string[] = ['name', 'status'];
  public roles: Roles[] = [
    {name: 'Student', status: true, reason:''},
    {name: 'Lecture', status:true, reason:''},
    {name: 'Cab Driver', status: true, reason:''},
    {name: 'Carpenter', status: false, reason:''},
    {name: 'Plumber', status: true, reason:''}
    
  ];
  dataSource = new MatTableDataSource(this.roles);
  constructor(private _bottomSheet: MatBottomSheet,private _authService: AuthenticationService,private _toastr: ToasterService) { }

  ngOnInit() {
  }
  public addRole(){
    const bottomSheetRef=  this._bottomSheet.open(AddUserComponent,{
      disableClose: false,
      panelClass: 'add-user'
    });
    bottomSheetRef.afterDismissed().subscribe((data) => {
      this.addElement(data)
      console.log(this.roles)
    //  this.getRoles();
    });
  }
  getRoles() {
    //   this.roles = [
    //     {
    //         "id": 1,
    //         "name": "admin"
    //     },
    //     {
    //         "id": 3,
    //         "name": "student"
    //     },
    //     {
    //         "id": 2,
    //         "name": "teacher"
    //     }
    // ]
      this._authService.roles().subscribe(res=>{
       // this.roles = res;
        console.log(res)
      })
  }
  addElement(data) {
    this.roles.push(data)
    this.dataSource = new MatTableDataSource(this.roles);
  }

}
