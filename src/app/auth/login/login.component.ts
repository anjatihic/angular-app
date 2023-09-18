import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required)
  })

  loggedInUser = new User();
  errorMessage="Username or password is not correct";
  showError = false;

  constructor(private authService: AuthService,
      private router: Router) {}

  onLogin(){
    let username = this.loginForm.controls['username'].value!;
    let pass = this.loginForm.controls['pass'].value!;

    this.loginForm.reset();

    this.authService.login(username, pass).subscribe(res => {
      this.loggedInUser = res;
      if(res.username != ''){
        this.router.navigate(['/home']);
      }else{
        this.showError = true;
      }
    });

  }
}
