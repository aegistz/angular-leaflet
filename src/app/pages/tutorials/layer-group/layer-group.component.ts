import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-layer-group',
  templateUrl: './layer-group.component.html',
  styleUrls: ['./layer-group.component.css']
})
export class LayerGroupComponent implements OnInit {
  public map: any

  constructor() {

  }

  ngOnInit(): void {
    this.map = L.map('map', {
      center: [39.73, -104.99],
      zoom: 10,
    });

    var cities = L.layerGroup().addTo(this.map)

    var mLittleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities);
    var mDenver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities);
    var mAurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities);
    var mGolden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


    var google_map = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', { maxZoom: 19, attribution: 'Google Maps' });

    var Google_Hybrid = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { maxZoom: 19, attribution: 'Google Hybrid' });

    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    var baseLayers = {
      'Google Hybrid': Google_Hybrid.addTo(this.map),
      'Google Map': google_map
    };

    var overlays = {
      'Cities': cities
    };

    var layerControl = L.control.layers(baseLayers, overlays,
      {
        collapsed: false, // true , false
        position: 'bottomleft' // 'topleft', 'topright', 'bottomleft' or 'bottomright'
      }
    ).addTo(this.map);

  }

}
