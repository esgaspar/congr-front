import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private URLbase = 'https://localhost:3000/';

    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    constructor(private httpClient: HttpClient) { }

    public list() {
        return this.httpClient.get(this.URLbase + `contact/?key=${this.API_KEY}`);
    }
    public add(contact) {
        return this.httpClient.post(this.URLbase + 'contact', contact, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));

    }
}