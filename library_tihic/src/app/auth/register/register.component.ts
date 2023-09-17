import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  }
}
