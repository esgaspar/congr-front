import { environment } from 'src/environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Contact } from '../model/contact';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './alert.service';




@Injectable({
    providedIn: 'root'
})
export class ContactService implements OnInit {
    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    private URLbase = environment.baseUrl;
    public contactList;
    public returnUrl: string;


    private contactBehavior = new BehaviorSubject<any>(new Object());
    contact = this.contactBehavior.asObservable();


    public currentContactSubject: BehaviorSubject<any>;
    public currentContact: Observable<Contact>;
    public loading: boolean;


    constructor(private http: HttpClient, private httpClient: HttpClient, private route: ActivatedRoute, private alertService: AlertService,
        private router: Router, ) {
        this.currentContactSubject = new BehaviorSubject<Contact>(JSON.parse(localStorage.getItem('currentContact')));
        this.currentContact = this.currentContactSubject.asObservable();
    }


    ngOnInit() {

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // if (this.currentContactValue) {
        //     this.router.navigate(['/']);
        // }
    }

    async updateContact(contact: any) {
        this.contactBehavior.next(contact);
    } 

    public list() {
        this.contactList = this.httpClient.get(this.URLbase + `contact/manager/?key=${this.API_KEY}`);
        return this.contactList;
    }
    public async add(contact) {
        return this.httpClient.post(this.URLbase + `contact/manager/?key=${this.API_KEY}`, contact, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }
    public delete(ContactId) {
        return this.httpClient.delete(this.URLbase + `contact/manager/${ContactId}`);
    }
    public async update(contact) {

            return this.httpClient.put(this.URLbase + 'contact/manager', contact, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            }).pipe(map(data =>
                data));
    }

    public get currentContactValue(): Contact {
        return this.currentContactSubject.value;
    }

    register(contact: Contact) {
        return this.http.post(`/contacts/register`, contact);
    }

}
