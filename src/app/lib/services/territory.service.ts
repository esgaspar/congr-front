import { environment } from 'src/environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Territory } from '../model/territory';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './alert.service';




@Injectable({
    providedIn: 'root'
})
export class TerritoryService implements OnInit {
    private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

    private URLbase = environment.baseUrl;
    public territoryList;
    public returnUrl: string;


    private territoryBehavior = new BehaviorSubject<any>(new Object());
    territory = this.territoryBehavior.asObservable();


    public currentTerritorySubject: BehaviorSubject<any>;
    public currentTerritory: Observable<Territory>;
    public loading: boolean;


    constructor(private http: HttpClient, private httpClient: HttpClient, private route: ActivatedRoute, private alertService: AlertService,
        private router: Router, ) {
        this.currentTerritorySubject = new BehaviorSubject<Territory>(JSON.parse(localStorage.getItem('currentTerritory')));
        this.currentTerritory = this.currentTerritorySubject.asObservable();
    }


    ngOnInit() {

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // if (this.currentTerritoryValue) {
        //     this.router.navigate(['/']);
        // }
    }

    async updateObs(territory: any) {
        this.territoryBehavior.next(territory);
    } 

    public list() {
        this.territoryList = this.httpClient.get(this.URLbase + `territory/manager/?key=${this.API_KEY}`);
        return this.territoryList;
    }
    public async add(territory) {
        return this.httpClient.post(this.URLbase + `territory/manager/?key=${this.API_KEY}`, territory, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }).pipe(map(data =>
            data));
    }
    public delete(TerritoryId) {
        return this.httpClient.delete(this.URLbase + `territory/manager/${TerritoryId}`);
    }
    public async update(territory) {

            return this.httpClient.put(this.URLbase + 'territory/manager', territory, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            }).pipe(map(data =>
                data));
    }

    public get currentTerritoryValue(): Territory {
        return this.currentTerritorySubject.value;
    }

    register(territory: Territory) {
        return this.http.post(`/territorys/register`, territory);
    }

}
