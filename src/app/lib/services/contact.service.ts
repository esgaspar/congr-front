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
export class ContactService implements OnInit {
    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    private URLbase = 'http://localhost:3000/';
    public contactList;
    public returnUrl: string;


    private contactBehavior = new BehaviorSubject<any>(new Object());
    contact = this.contactBehavior.asObservable();


    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<User>;
    public loading: boolean;


    constructor(private httpClient: HttpClient, private route: ActivatedRoute, private alertService: AlertService,
        private router: Router, ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    ngOnInit() {

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if (this.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    async updateContact(contact: any) {
        console.log('contact service - contact: ' + contact);
        this.contactBehavior.next(contact);
    }

    public list() {
        this.contactList = this.httpClient.get(this.URLbase + `contact/manager/?key=${this.API_KEY}`);
        return this.contactList;
    }
    public async add(contact) {
        console.log("front contact", contact);
        return this.httpClient.post(this.URLbase + `contact/manager/?key=${this.API_KEY}`, contact, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }
    public delete(contactId) {
        return this.httpClient.delete(this.URLbase + `contact/manager/${contactId}`);
    }
    public async update(contact) {
        return this.httpClient.put(this.URLbase + 'contact/manager', contact, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    // public async login(username, password) {
    //     console.log('login-service', username);

    //     return this.httpClient.post(this.URLbase + 'contact/authenticate/', { "username": username, "password": password }, {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //         })
    //     })
    // }

    public async login(username, password) {
        console.log("login", username, password);
        return this.httpClient.post(this.URLbase + 'contact/authenticate/', { "username": username, "password": password }, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(first())
            .subscribe(
                data => {
                    if (data[0]._id) {
                        localStorage.setItem('currentUser', JSON.stringify(data));
                        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
                        this.currentUser = this.currentUserSubject.asObservable();
                        // this.router.navigate([this.returnUrl]);
                    } else {
                        this.alertService.error("Usuario ou senha invalidos");
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    console.log("falha login");
                });
    }


    public logout() {
        localStorage.setItem('currentUser', null);

    }


    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(resp => {

                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            },
                err => {
                    reject(err);
                });
        });

    }
}