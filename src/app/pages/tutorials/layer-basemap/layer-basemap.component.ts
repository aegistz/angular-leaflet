import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-layer-basemap',
  templateUrl: './layer-basemap.component.html',
  styleUrls: ['./layer-basemap.component.css']
})
export class LayerBasemapComponent implements OnInit {
  public map: any
  basemap: any = {}
  layer_group: any
  public list_basemap = [
    {
      name: 'OpenStreetMap.Mapnik',
      url: `L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });`,
      tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }, {
      name: 'OpenStreetMap.DE',
      url: `L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });`,
      tileLayer: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png'
    }, {
      name: 'OpenStreetMap.CH',
      url: `L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        bounds: [[45, 5], [48, 11]]
      });`,
      tileLayer: 'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png'
    }, {
      name: 'OpenStreetMap.France',
      url: `L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });`,
      tileLayer: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
    }, {
      name: 'OpenStreetMap.BZH',
      url: `L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
        bounds: [[46.2, -5.5], [50, 0.7]]
      });`,
      tileLayer: 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
    },
  ]

  constructor() {
    this.basemap = this.list_basemap[0]
  }

  ngOnInit(): void {
    this.map = L.map('map', {
      center: [14.549664500251069, 100.55865036532487],
      zoom: 7,
    });

    this.layer_group = L.layerGroup().addTo(this.map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.layer_group)
  }

  async get_basemap(item: any = {}) {
    this.layer_group.clearLayers()
    this.basemap = item
    L.tileLayer(item.tileLayer, {
      maxZoom: 19,
    }).addTo(this.layer_group)

  }

}
