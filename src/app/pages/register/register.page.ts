import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseServiceService } from 'src/app/services/firebaseService/firebase-service.service';

export class User {
    email: string;
    password: string;
    role:number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isLinear = false;
  formRegister: FormGroup;
  submitted: boolean;
  pager =false;
  roles;
  public user:User = new User();
  constructor(private fb: FormBuilder, private _authService: AuthenticationService, private _toastr: ToasterService,public fAuth: AngularFireAuth,private crudService: FirebaseServiceService) {}

  ngOnInit() {
      this.createForm();
      this.getRoles();
  }
  getRoles() {
    this.roles = [
      {
          "id": 1,
          "name": "admin"
      },
      {
          "id": 3,
          "name": "student"
      },
      {
          "id": 2,
          "name": "teacher"
      }
  ]
    // this._authService.roles().subscribe(res=>{
    //   this.roles = res;
    //   console.log(res)
    // })
  }
  private createForm(){
    this.formRegister = this.fb.group({
      firstName: ['', [ Validators.required ]],
      lastName: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      mobileNumber: ['', [ Validators.required ]],
      password: ['', [ Validators.required, Validators.minLength(6), this.hasNumber, this.hasUppercase, this.hasLowercase, this.hasSpecialCharacter ]],
      role: [null, [Validators.required]],
      status:1
    });
  }
    // check for Numbers
    private hasNumber(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value && !(/\d/.test(control.value))) {
        return { number: true };
      }
      return null;
    }
  
    // check for Upper Case letters
    private hasUppercase(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value && !(/[A-Z]/.test(control.value))) {
        return { uppercase: true };
      }
      return null;
    }
  
    // check for Lower Case letters
    private hasLowercase(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value && !(/[a-z]/.test(control.value))) {
        return { lowercase: true };
      }
      return null;
    }
  
    // check for Special Characters
    private hasSpecialCharacter(control: AbstractControl): { [key: string]: boolean } | null {
      if (control.value && !(/[ !@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]/.test(control.value))) {
        return { specialcharacter: true };
      }
      return null;
    }
    // public onRegister(){
    //   this.submitted = true;
    //   console.log(this.formRegister.value)
    //  // if(this.formRegister.invalid){return;}
    //   this._authService.register(this.formRegister.value).subscribe(res => {
    //   }, err =>{
    //     this._toastr.presentToast('Registartion Failed','bottom','danger', 'sad');
    //   });
    // }
    async onRegister() {
      try {
        var r = await this.fAuth.auth.createUserWithEmailAndPassword(
          this.formRegister.value.email,
          this.formRegister.value.password,
        );
        if (r) {
          this._toastr.presentToast("Successfully registered!",'bottom','danger', 'sad');
          this.crudService.create_User(this.formRegister.value);
          console.log("Successfully registered!");
         // this.navCtrl.setRoot('LoginPage');
        }
  
      } catch (err) {
        this._toastr.presentToast(err,'bottom','danger', 'sad');
        console.error(err);
      }
    }
}
