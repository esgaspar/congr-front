import { environment } from 'src/environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../model/user';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './alert.service';




@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {
    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    private URLbase = environment.baseUrl;
    public userList;
    public returnUrl: string;


    private userBehavior = new BehaviorSubject<any>(new Object());
    user = this.userBehavior.asObservable();


    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<User>;
    public loading: boolean;

    constructor(private http: HttpClient, private httpClient: HttpClient, private route: ActivatedRoute, private alertService: AlertService,
        private router: Router,) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    ngOnInit() {
    }

    async updateUser(user: any) {
        this.userBehavior.next(user);
    }

    public list() {
        this.userList = this.httpClient.get(this.URLbase + `user/manager/?key=${this.API_KEY}`);
        return this.userList;
    }
    public async add(user) {
        return this.httpClient.post(this.URLbase + `user/manager/?key=${this.API_KEY}`, user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data => data));
    }
    public delete(UserId) {
        return this.httpClient.delete(this.URLbase + `user/manager/${UserId}`);
    }
    public async update(user) {

        return this.httpClient.put(this.URLbase + 'user/manager', user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

}
