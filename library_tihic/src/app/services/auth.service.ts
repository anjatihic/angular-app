import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  DATABASE_URL = "https://angular-library-8b92a-default-rtdb.firebaseio.com/user.json"

  constructor(private http: HttpClient) { }

  createNewUser(
    fName: string, lName: string, username: string, email: string, pass: string
  ){

    const userData = this.fillAUserObject(fName, lName, username, email, pass);

    this.http.post(this.DATABASE_URL, userData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error.message);
      });
  }



  private fillAUserObject(fName: string, lName: string, username: string, email: string, pass: string){
    let user = new User();

    user.fName = fName;
    user.lName = lName;
    user.username = username;
    user.email = email;
    user.pass = pass;

    return user;
  }
}
