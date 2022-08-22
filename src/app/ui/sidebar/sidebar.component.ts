import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  list_menu = [
    {
      group_name: 'Overview',
      li: [
        {
          name_menu: 'Get started',
          link: '/index'
        }
      ]
    },
    {
      group_name: 'Map',
      li: [
        {
          name_menu: 'Quick Start Guide',
          link: '/tutorials/start-guide'
        }, {
          name_menu: 'Layer Group',
          link: '/tutorials/layer-group'
        }, {
          name_menu: 'Basemap',
          link: '/tutorials/layer-basemap'
        }, {
          name_menu: 'Geojson',
          link: '/'
        }, {
          name_menu: 'Control',
          link: '/'
        },
      ]
    }, {
      group_name: 'Vector Layer',
      li: [
        {
          name_menu: 'Marker',
          link: '/'
        }, {
          name_menu: 'Circle',
          link: '/'
        }, {
          name_menu: 'Line',
          link: '/'
        }, {
          name_menu: 'Polygon',
          link: '/'
        }, {
          name_menu: 'Rectangle',
          link: '/'
        },
      ]
    }, {
      group_name: 'UI Layer',
      li: [
        {
          name_menu: 'Popup',
          link: '/'
        }, {
          name_menu: 'Tooltip',
          link: '/'
        }, {
          name_menu: 'Label',
          link: '/'
        },
      ]
    }, {
      group_name: 'Template',
      li: [
        {
          name_menu: 'Choroplate Map',
          link: '/'
        }
      ]
    },
  ]

  get_menu: any = ''

  constructor(
  ) {

  }

  ngOnInit(): void {

  }

  set_menu(item: any) {
    if (item.link == '/') {
      this.get_menu = '/index'
    } else {
      this.get_menu = item.link
    }
  }

}
