import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.isItLoggedInSub.subscribe();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.authService.isItLoggedInSub.value){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
