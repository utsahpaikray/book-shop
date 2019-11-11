// import {MaterialModule} from '../../material.module';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '../../services/helper-service/helper.service';
import { Router } from '@angular/router';
import { UserRole } from '../../enums/user-role.enum';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  formLogin: FormGroup;
  private _subscribeFormControls: any;
  @ViewChild('email') private elementRef: ElementRef;
  @Input('role') public role: number;
  public submitted = false;
  public userRole = UserRole;
  constructor(private _router: Router, private fb: FormBuilder, private _authService: AuthenticationService, private _helper: HelperService,  private _toastr: ToasterService) {}

  ngOnInit() {
    this.createForm();
    // this._subscribeFormControls = this.formLogin.controls['username'].valueChanges.subscribe(val => {
    //   if (val.indexOf(' ') >= 0) {
    //     this.formLogin.controls['username'].setValue(this._helper.removeEmptySpaces(val));
    //   }
    // });
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
  private createForm() {
    this.firstFormGroup = this.fb.group({
      emailAddress:['', [ Validators.required, Validators.email ]]
    });
    this.secondFormGroup = this.fb.group({
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });
  }
  public onLogin() {
    this.submitted = true;
    console.log(this.firstFormGroup)
    let data = {
      username: this.firstFormGroup.value.emailAddress,
      password: this.secondFormGroup.value.password
    }
    this._helper.setSession(data);
    this._authService.login(data).subscribe(res => {
      this._helper.setSession(res);
    },
    err =>  {
      this._toastr.presentToast('Login Failed','bottom','danger', 'sad');
     // this.formLogin.patchValue({password: ''});
    }
    );
  }

  /* Login form validations */
  get f() { return this.formLogin.controls; }

  ngOnDestroy() {
   // this._subscribeFormControls.unsubscribe();
  }
}
