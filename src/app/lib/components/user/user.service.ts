import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    private URLbase = environment.baseUrl;
    public UserList;

    private UserBehavior = new BehaviorSubject<any>(new Object());
    User = this.UserBehavior.asObservable();



    constructor(private httpClient: HttpClient) {
    }

    async updateUser(User: any) {
        console.log('User service - User: ' + User);
        this.UserBehavior.next(User);
    }

    public list() {
        this.UserList = this.httpClient.get(this.URLbase + `User/?key=${this.API_KEY}`);
        return this.UserList;
    }
    public async add(User) {
        return this.httpClient.post(this.URLbase + 'User', User, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }
    public delete(UserId) {
        return this.httpClient.delete(this.URLbase + `User/${UserId}`);
    }
    public async update(User) {
        return this.httpClient.put(this.URLbase + 'User', User, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
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
