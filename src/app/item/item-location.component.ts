import { Component, Input } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/Location';
import { Router } from '@angular/router';

@Component({
  selector: 'item-location',
  templateUrl: 'item-location.component.html',
  styleUrls: []
})
export class ItemLocationComponent {
  @Input()
  item: Location;

  constructor(private service: LocationService,
              private router: Router) {

  }

  getConnection(id: number) {
    let location = this.service.getById(id);
    return location.name;
  }

  navigateToLocation(locationId: string) {
    this.router.navigateByUrl('/list/(list-router:locations/' + locationId + ')');
  }
}
