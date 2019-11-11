import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isLinear = false;
  formRegister: FormGroup;
  submitted: boolean;
  constructor(private fb: FormBuilder, private _authService: AuthenticationService) {}

  ngOnInit() {
      this.createForm();
  }
  private createForm(){
    this.formRegister = this.fb.group({
      firstName: ['', [ Validators.required ]],
      lastName: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      mobileNumber: ['', [ Validators.required ]],
      password: ['', [ Validators.required, Validators.minLength(6), this.hasNumber, this.hasUppercase, this.hasLowercase, this.hasSpecialCharacter ]],
      role: [null, [Validators.required]]
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
    public onRegister(){
      this.submitted = true;
      console.log(this.formRegister.value)
      if(this.formRegister.invalid){return;}
      this._authService.register(this.formRegister.value).subscribe(res => {
      }, err =>{
      });
    }
}
