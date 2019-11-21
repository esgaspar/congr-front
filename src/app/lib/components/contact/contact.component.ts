import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  @Input() menuValue: any;
  params: any;
  private lat: number;
  private long: number;

  constructor(public contactService: ContactService) { }

  getPosition = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    });
  }


  async ngOnInit() {

    await this.getPosition();

  }

  // Setting TomTom keys
  // tomtom.routingKey('Uw8YUFmrE7akxji1Ck2O1TxIrGwGZGHu');
  // tomtom.searchKey('Uw8YUFmrE7akxji1Ck2O1TxIrGwGZGHu');
  // // Creating map
  // var map = tomtom.L.map('map', {
  //   key: 'Uw8YUFmrE7akxji1Ck2O1TxIrGwGZGHu',
  //   source: 'vector',
  //   basePath: '/assets/sdk',
  //   center: [this.lat, this.lon],
  //   traffic: true, 
  //   trafficFlow: true,
  //   language : 'pt-BR'

  // });
  // map.zoomControl.setPosition('topright');
  // var unitSelector = tomtom.unitSelector.getHtmlElement(tomtom.globalUnitService);
  // var languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'search');
  // var unitRow = document.createElement('div');
  // var unitLabel = document.createElement('label');
  // unitLabel.innerHTML = 'measurement';
  // unitLabel.appendChild(unitSelector);
  // unitRow.appendChild(unitLabel);
  // unitRow.className = 'input-container';
  // var langRow = document.createElement('div');
  // var langLabel = document.createElement('label');
  // langLabel.innerHTML = 'Search language';
  // langLabel.appendChild(languageSelector);
  // langRow.appendChild(langLabel);
  // langRow.className = 'input-container';
  // tomtom.controlPanel({
  //   position: 'bottomright',
  //   title: 'Settings',
  //   collapsed: true
  // })
  //   .addTo(map)
  //   .addContent(unitRow)
  //   .addContent(langRow);
  // // Adding the route inputs fields widget
  // var routeInputs = tomtom.routeInputs().addTo(map);
  // // Adding the route widget
  // var routeOnMapView = tomtom.routeOnMap().addTo(map);
  // // Connecting the routeInputs widget with the routeOnMap widget
  // routeInputs.on(routeInputs.Events.LocationsFound, function (eventObject) {
  //   routeOnMapView.draw(eventObject.points);
  // });
  // routeInputs.on(routeInputs.Events.LocationsCleared, function (eventObject) {
  //   routeOnMapView.draw(eventObject.points);
  // });
  // // Show error in widget when location cannot be autodetected
  // routeInputs.on(routeInputs.Events.LocationError, function () {
  //   routeInputs.showLocationNotFoundMessageBox();
  // });

  // map.center = [this.lat, this.lon];


}
