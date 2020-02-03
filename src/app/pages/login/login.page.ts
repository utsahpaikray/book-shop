// import {MaterialModule} from '../../material.module';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '../../services/helper-service/helper.service';
import { Router } from '@angular/router';
import { UserRole } from '../../enums/user-role.enum';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';
import { ModalController, NavParams } from '@ionic/angular';
import { escapeRegExp } from '@angular/compiler/src/util';
export class User {
  email: string;
  password: string;
}
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
  user: any;
  back: boolean= false;
  modalTitle: any;
  @Input("paramTitle") paramTitle;
  @Input('from') from;
  constructor(private _router: Router, private fb: FormBuilder, private _authService: AuthenticationService, private _helper: HelperService,  private _toastr: ToasterService,public fAuth: AngularFireAuth,private crudService: FirebaseServiceService,   private modalController: ModalController) {
 
  }

  ngOnInit() {
    if(this.from == 'Nav'){
      this.back= true;
    }else{
      this.back= false;
    }
      this.modalTitle = this.paramTitle;
    this._helper.clearStorage();
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
  // public onLogin() {
  //   this.submitted = true;
  //   let data = {
  //     username: this.firstFormGroup.value.emailAddress,
  //     password: this.secondFormGroup.value.password
  //   }
  //   this._authService.login(data).subscribe(res => {
  //     this._helper.setSession(res);
  //     this._router.navigateByUrl('/master/home');
  //     this._toastr.presentToast('Login Succesfully','bottom','primary');
  //   },
  //   err =>  {
  //     this._toastr.presentToast('Login Failed','bottom','danger', 'sad');
  //    // this.formLogin.patchValue({password: ''});
  //   }
  //   );
  // }
  async onLogin() {
    this.submitted = true;
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
      this.firstFormGroup.value.emailAddress,
      this.secondFormGroup.value.password
      );
      if (r) {
        this._toastr.presentToast('Login Succesfully','bottom','primary');
        this.crudService.read_User(r.user.email).subscribe(user=>{
          this.user = this.mapObject(user);
          this._helper.setSession(this.user);
          this._router.navigateByUrl('/master/home');
          if(this.back){
            this.closeModal();
          }
        });
      }
    } catch (err) {
      this._toastr.presentToast('Login Failed','bottom','danger', 'sad');
      console.error(err);
    }
  }
  public mapObject(item){
    
    return item.map(e => {
      console.log(e.payload.doc.data());
      return {
        id: e.payload.doc.id,
        user: e.payload.doc.data(),
       // title : e.payload.doc.data()['title'],
      };
    })
  }
  /* Login form validations */
  get f() { return this.formLogin.controls; }
  async closeModal() {
    const onClosedData: string = "login";
    await this.modalController.dismiss(onClosedData);
  }
  ngOnDestroy() {
   // this._subscribeFormControls.unsubscribe();
  }
}




