import { Component, Input } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/Location';

@Component({
  selector: 'item-location',
  templateUrl: 'item-location.component.html',
  styleUrls: []
})
export class ItemLocationComponent {
  @Input()
  item: Location;

  constructor(private service: LocationService) {

  }

  getConnection(id: number) {
    let location = this.service.getById(id);
    return location.name;
  }
}
