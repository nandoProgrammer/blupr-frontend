import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorage } from '../classes/LocalStorage';

@Injectable({
  providedIn: 'root'
})

export class NotAuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!LocalStorage.getItem('tokenBlupr')){
      return true
    }
    
    this.router.navigate(['/feed']);
    return false;
  }

}
