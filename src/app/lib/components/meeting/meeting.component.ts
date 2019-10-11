import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: 'meeting.component.html',
  styleUrls: ['meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  @Input() menuValue: any;

  constructor() {}

  ngOnInit() {}
}
