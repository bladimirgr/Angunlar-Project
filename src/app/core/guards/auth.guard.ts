import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
      private authService: AuthService,
      private router: Router
  ){}

  /**
   * 
   * @param route
   * @param state
   * @returns boolean
   * 
   */

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{

    this.authService.getDataLocalStore();
    if (this.authService.isAuthenticated() && this.authService.userRoles)  {
  
      return true;
    };

    this.router.navigateByUrl('auth/login');
    return false;

  }

  /**
   * @param childRoute 
   * @param state 
   * @returns boolean
   */

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.canActivate(childRoute, state)) {

      return false;
    }

    const roles = childRoute.data["roles"]

    return this.authService.hasRole(roles).pipe(
      tap((valid: boolean) => {

        if(!valid) {
          if(this.router.routerState.snapshot.url != '') {

            console.log('%c⧭', 'color: #ffa640', 'Solicite autorización' );
          }
          if(this.router.routerState.snapshot.url != '') {

            this.router.navigateByUrl('auth/login');
          }
        }
      })
    )

  }

}
