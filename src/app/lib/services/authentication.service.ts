import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

  private URLbase = environment.baseUrl;///'https://fathomless-caverns-13885.herokuapp.com/';

  private userBehavior = new BehaviorSubject<any>(new Object());
  user = this.userBehavior.asObservable();

  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;



  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public async login(username, password) {
    console.log('login-service', username);

    return this.httpClient.post(this.URLbase + 'user/authenticate/', { "username": username, "password": password }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }


  public logout() {
    localStorage.setItem('currentUser', null);
    this.currentUserSubject = new BehaviorSubject<User>(null);
  }

}
