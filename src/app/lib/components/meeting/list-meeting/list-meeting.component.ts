import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MeetingService } from '../meeting.service';
import {MatStepper} from '@angular/material';



import {
  MatStepperModule
} from '@angular/material';

@Component({
  selector: 'app-list-meeting',
  templateUrl: 'list-meeting.component.html',
  styleUrls: ['list-meeting.component.scss']
})
export class ListMeetingComponent implements OnInit, OnDestroy {
  service;
  meetings;
  loading = true;

  public subscribes = { meeting: null, list: null, delete: null };
  @ViewChild(MatStepper, {static: false}) stepper !: MatStepper;


  constructor(private meetingService: MeetingService) {
    this.service = meetingService;
  }

  ngOnDestroy(): void {}

  ngOnInit() {
    this.loading = true;
    this.list();

    this.subscribes.meeting = this.service.meeting.subscribe(data => {});
  }

  public list() {
    this.subscribes.list = this.service.list().subscribe((data: any) => {
      this.loading = false;
      this.service.meetingList = data;
    });
  }

  public delete(id, index) {
    this.subscribes.delete = this.service.delete(id).subscribe(reponse => {
      this.service.meetingList.splice(index, 1);
    });
  }

  public meetingEdit(value, index) {
    this.service.updateMeeting(value);
  }

  public move(index: number) {
    this.stepper.selectedIndex = index;
  }
}
