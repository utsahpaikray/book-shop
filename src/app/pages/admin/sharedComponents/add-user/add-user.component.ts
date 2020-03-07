import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  addRole: FormGroup;

  constructor(private bottomSheetRef: MatBottomSheetRef<AddUserComponent>,
    private bottomSheet: MatBottomSheet,private fb: FormBuilder, private _authService: AuthenticationService, private _toastr: ToasterService) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm(){
    this.addRole = this.fb.group({
      name: ['', [ Validators.required ]],
      reason: [''],
      status: [true]
    });
  }
  closeDialog(event?: MouseEvent): void {
    if(event){
         event.preventDefault();
    }
    this.bottomSheetRef.dismiss(this.addRole.value);
  // this.bottomSheet.close(BottomSheetOverviewExampleSheet);
 }
 public onAdd(){
   this._authService.createRole(this.addRole.value).subscribe((res)=>{
    console.log(res)
   });
   this.closeDialog();
 }
}
