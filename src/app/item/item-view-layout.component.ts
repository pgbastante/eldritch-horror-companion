import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';
@Component({
  selector: 'item-view-layout',
  templateUrl: 'item-view-layout.component.html',
  styleUrls: ['item-view-layout.component.css']
})
export class ItemViewLayoutComponent {
  @Input()
  item: Item;
}
