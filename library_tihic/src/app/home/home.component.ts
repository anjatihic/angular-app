import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loggedInUser = new User();

  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInUserSub.subscribe(user =>{
      this.loggedInUser = user;
    })
  }

}
