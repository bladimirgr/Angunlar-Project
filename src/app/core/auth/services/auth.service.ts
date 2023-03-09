import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export enum Role {
  Admin = 'Admin',
  Paciente = 'Paciente',
  Doctor = 'Doctor',
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userName!: string
  userRoles!: string
  isUserAuthenticated!: boolean

  private url = 'http://localhost:5000/api/v1/auth'
  private urlRenew = 'http://localhost:5000/api/v1/renew'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login( email: string, password: string ){

    const url = `${this.url}`
    const body = { email, password}

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp: any) => {
        
        if( resp ) {
        
          console.log('%c⧭', 'color: #007300', resp);
          localStorage.setItem('token', resp.data.jwToken)
          localStorage.setItem('x-user', resp.data.username)
          localStorage.setItem('x-user-role', resp.data.roles)
          localStorage.setItem('x-userId', resp.data.id)
          localStorage.setItem('x-user-auth', resp.succeeded)
                
        } else {

          console.log('%c⧭', 'color: #e50000', "Error al iniciar sesión");

        }
      })
    );
  }

  validateToken(): Observable<any> {

    const url = `${this.urlRenew}`

    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || [] )
    
    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map(( resp: any) => {

          localStorage.setItem('token', resp.jwToken);

          return resp;

        })
      );
  }

  hasRole(obj: string): Observable<boolean> {
    let hasRoleAccess = false;
    if(!this.userRoles) {
      return of(hasRoleAccess)
    } 

    if(obj === this.userRoles){
      hasRoleAccess = true;
      return of(hasRoleAccess)
    }

    return of(hasRoleAccess)
  }

  isAuthenticated(): Observable<boolean> {
    if (this.isUserAuthenticated) {
      return this.validateToken();
    }
    return of(false);
  }

  getDataLocalStore(): any {
    this.userName = localStorage.getItem("x-user") || '';
    this.isUserAuthenticated = localStorage.getItem("x-user-auth") === 'true' ? true : false;
    this.userRoles = localStorage.getItem("x-user-role") || '';
  }

  // forgotPassword(email: string){
  //   const url = `${this.urlForgot}`

  //   const body = { email }

  //   return this.http.post<AuthResponse>( url, body)
  //   .pipe(
  //     map((resp: any) => {
  //       console.log('%c⧭', 'color: #ffcc00', resp);
  //     })
  //   )

  // }

}
