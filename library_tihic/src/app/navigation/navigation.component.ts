import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(public authService: AuthService){
    this.authService.isItLoggedInSub.subscribe();
    this.authService.loggedUserRoleSub.subscribe();
  }

  logout(){
    this.authService.logout();
  }

}
