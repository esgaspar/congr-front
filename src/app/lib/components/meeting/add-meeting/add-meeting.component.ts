import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MeetingService } from '../meeting.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-meeting',
  templateUrl: 'add-meeting.component.html',
  styleUrls: ['add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit, OnDestroy {
  addForm;
  meeting = this.meetingClear();
  public subscribes = { add: null, edit: null, meeting: null };

  constructor(public service: MeetingService, public formBuilder: FormBuilder,
  ) {
    this.meeting = this.meetingClear();
    this.createForm();
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.subscribes.meeting = new Observable<any>();
  }

  public meetingClear() {
    return { _id: null, firstName: '', lastName: '', sexGender: '' };
  }

  createForm() {

    this.subscribes.meeting = this.service.meeting.subscribe(data => {
      if (data && data._id) {
        this.meeting = data;
        this.addForm = this.formBuilder.group({
          lastName: data.lastName,
          firstName: data.firstName,
        });
      } else {
        this.addForm = this.formBuilder.group({
          lastName: '',
          firstName: '',
        });
      }
    });
  }

 async add(meeting) {
    this.meeting.firstName = meeting.firstName;
    this.meeting.lastName = meeting.lastName;

    if (this.meeting.sexGender === '') {
      this.meeting.sexGender = 'M';
    }

    if (this.meeting._id) {
      this.subscribes.edit = (await (this.service.update(this.meeting))).subscribe((reponse) => {
      });
    } else {
      this.subscribes.add = (await this.service.add(this.meeting)).subscribe((reponse) => {
        this.service.meetingList.unshift(reponse);
      });
    }
    this.meeting = this.meetingClear();
    this.service.updateMeeting(this.meetingClear());
    this.addForm.reset();

  }

}
