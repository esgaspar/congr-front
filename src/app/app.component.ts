import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'congr-front';
  @HostBinding('class') componentCssClass;
  contactEdit: any;
  menuValue: any;

  constructor(public overlayContainer: OverlayContainer) {
    this.onSetTheme('light-theme');
    // dark-theme
    // light-theme
    // default-theme
  }

  contactUpdate($event) {
    this.contactEdit = $event;
  }

  menuMethodParent($event) {
    this.menuValue = $event;
  }


  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

}
