import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'list-menu',
  templateUrl: 'list-menu.component.html',
  styleUrls: ['list-menu.component.css']
})
export class ListMenuComponent {
  navLinks = [
    {
      id: 1,
      route: 'spells',
      label: 'Spells'
    },
    {
      id: 2,
      route: 'assets',
      label: 'Assets'
    },
    {
      id: 3,
      route: 'unique-assets',
      label: 'Unique Assets'
    },
    {
      id: 4,
      route: 'artifacts',
      label: 'Artifacts'
    },
    {
      id: 5,
      route: 'conditions',
      label: 'Conditions'
    },
    {
      id: 6,
      route: 'locations',
      label: 'Locations'
    },
    {
      id: 7,
      route: 'investigators',
      label: 'Investigators'
    },
    {
      id: 8,
      route: 'ancient-ones',
      label: 'Ancient Ones'
    }
  ];

  constructor(private router: Router) {

  }

  onLinkClick(event: any) {
    let link = this.navLinks[event.index];
    this.router.navigate(['/list', {outlets: {'list-router': [link.route]}}]);
  }
}
