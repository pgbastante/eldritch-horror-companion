import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';
@Component({
  selector: 'item-card',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class ItemComponent {
  @Input()
  item: Item;
}
