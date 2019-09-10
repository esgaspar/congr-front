import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'congr-front';

  menuValue: String;

  menuMethodParent($event) {
    this.menuValue = $event;
  }
}
