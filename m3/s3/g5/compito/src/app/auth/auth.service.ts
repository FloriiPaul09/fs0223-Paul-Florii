import { IData } from './interfaces/i-data';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILogIn } from './interfaces/i-log-in';
import { ISignUp } from './interfaces/i-sign-up';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService();
  urlAPI = environment.urlAPI;

  private authSub = new BehaviorSubject<null | IData>(null);

  user$ = this.authSub.asObservable();
  isLoggedIn$ = this.user$.pipe(map(data => Boolean(data)));
  authLogoutTimer : any;

  constructor(
    private http : HttpClient,
    private router : Router
  ) {
    this.restoreUser();
   }

   login(data:ILogIn){
    return this.http.post<IData>(this.urlAPI + '/login', data)
    .pipe(tap(data => {
      this.authSub.next(data);
      localStorage.setItem('user', JSON.stringify(data));
    }))
   }



   restoreUser(){
    let userName = localStorage.getItem('user');
    if(!userName){
      return
    }
    let user:IData = JSON.parse(userName)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return
    }
    this.authSub.next(user);
   }

   signUp(data:ISignUp){
    return this.http.post<IData>(this.urlAPI + '/signup', data);
   }

   logout(){
    this.authSub.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer);
    }
   }
}
