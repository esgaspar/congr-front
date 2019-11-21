import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from './../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private API_KEY = 'e56d3ca5d6ab8eb246a64d966fb72b5cde48b740';

  private URLbase = environment.baseUrl;
  public meetingList;

  private meetingBehavior = new BehaviorSubject<any>(new Object());
  meeting = this.meetingBehavior.asObservable();

  constructor(private httpClient: HttpClient) { }

  async updateMeeting(meeting: any) {
    console.log('meeting service - meeting: ' + meeting);
    this.meetingBehavior.next(meeting);
  }

  public list() {
    this.meetingList = this.httpClient.get(
      this.URLbase + `meeting/?key=${this.API_KEY}`
    );
    return this.meetingList;
  }
  public async add(meeting) {
    return this.httpClient
      .post(this.URLbase + 'meeting', meeting, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(map(data => data));
  }
  public delete(meetingId) {
    return this.httpClient.delete(this.URLbase + `meeting/${meetingId}`);
  }
  public async update(meeting) {
    return this.httpClient
      .put(this.URLbase + 'meeting', meeting, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(map(data => data));
  }
}
