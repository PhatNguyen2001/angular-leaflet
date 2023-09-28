import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef | undefined;
  private map : any;
    
   constructor() {

   }

   ngAfterViewInit(): void {
       this.initMap();
   }

   initMap() {
    const lat = 14.0583; // Vĩ độ
    const lng = 108.2772; // Kinh độ
    this.map = L.map('map').setView([lat,lng], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
   }
   

}
