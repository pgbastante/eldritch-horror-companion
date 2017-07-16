import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'list-menu',
  templateUrl: 'list-menu.component.html',
  styleUrls: ['list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
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
  selectedIndex = 0;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.selectedIndex = this.findTabIndex(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedIndex = this.findTabIndex(event.url);
      }
    });
  }

  onLinkClick(event: any) {
    let link = this.navLinks[event.index];
    this.router.navigate(['/list', {outlets: {'list-router': [link.route]}}]);
  }

  private findTabIndex(url: string) {
    let route = url.match(/list-router:(locations|assets|spells|unique-assets|artifacts|conditions|investigators|ancient-ones)/),
      index = null;
    if (route) {
      index = this.navLinks.findIndex((obj) => obj.route === route[1]);
    }
    return index;
  }


}
