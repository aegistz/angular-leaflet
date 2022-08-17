import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { WebserviceService } from 'src/app/service/webservice.service';

@Component({
  selector: 'app-layer-basemap',
  templateUrl: './layer-basemap.component.html',
  styleUrls: ['./layer-basemap.component.css']
})
export class LayerBasemapComponent implements OnInit {
  public map: any
  basemap: any = {}
  layer_group: any
  list_basemap: any

  constructor(
    public webservice: WebserviceService
  ) {
    this.list_basemap = this.webservice.list_basemap
    this.basemap = this.webservice.list_basemap[0]
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
