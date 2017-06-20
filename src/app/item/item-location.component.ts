import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';
import { LocationService } from '../services/location.service';
@Component({
  selector: 'item-location',
  templateUrl: 'item-location.component.html',
  styleUrls: []
})
export class ItemLocationComponent {
  @Input()
  item: Item;

  constructor(private service: LocationService) {

  }

  getConnection(id: number) {
    let location = this.service.getById(id);
    return location.name;
  }
}
