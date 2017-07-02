import { Component } from '@angular/core';
@Component({
  selector: 'list-menu',
  templateUrl: 'list-menu.component.html',
  styleUrls: ['list-menu.component.css']
})
export class ListMenuComponent {
  navLinks = [
    {
      route: '/spells',
      label: 'Spells'
    },
    {
      route: '/assets',
      label: 'Assets'
    },
    {
      route: '/unique-assets',
      label: 'Unique Assets'
    },
    {
      route: '/artifacts',
      label: 'Artifacts'
    },
    {
      route: '/conditions',
      label: 'Conditions'
    },
    {
      route: '/locations',
      label: 'Locations'
    },
    {
      route: '/investigators',
      label: 'Investigators'
    },
    {
      route: '/ancient-ones',
      label: 'Ancient Ones'
    }
  ];
}
