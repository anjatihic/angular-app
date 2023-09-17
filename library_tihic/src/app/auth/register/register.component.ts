import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as bcrypt from 'bcryptjs';


const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.pass === control.value.passConfirm
    ? null
    : {PasswordNoMatch: true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  created: boolean = false;

  newUserForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', Validators.required),
    passConfirm: new FormControl('', Validators.required)
  }, 
  {validators: confirmPasswordValidator});

  constructor(private authService: AuthService) { }

  onRegister(){
    let fName = this.newUserForm.controls['fName'].value!;
    let lName = this.newUserForm.controls['lName'].value!;
    let username = this.newUserForm.controls['username'].value!;
    let email = this.newUserForm.controls['email'].value!;
    let pass = this.newUserForm.controls['pass'].value!;

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(pass, 10);

    
    this.newUserForm.reset();

    this.authService.createNewUser(fName, lName, username, email, hashedPass);
    this.created = true;


  }
}
