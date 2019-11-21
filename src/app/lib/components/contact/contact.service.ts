import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    private URLbase = 'http://localhost:3000/';
    public contactList;

    private contactBehavior = new BehaviorSubject<any>(new Object());
    contact = this.contactBehavior.asObservable();



    constructor(private httpClient: HttpClient) {
    }

    async updateContact(contact: any) {
        console.log('contact service - contact: ' + contact);
        this.contactBehavior.next(contact);
    }

    public list() {
        this.contactList = this.httpClient.get(this.URLbase + `contact/?key=${this.API_KEY}`);
        return this.contactList;
    }
    public async add(contact) {
        return this.httpClient.post(this.URLbase + 'contact', contact, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }
    public delete(contactId) {
        return this.httpClient.delete(this.URLbase + `contact/${contactId}`);
    }
    public async update(contact) {
        return this.httpClient.put(this.URLbase + 'contact', contact, {
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
