import { Component, Input } from '@angular/core';
import { itemType } from '../models/Item';
@Component({
  selector: 'item-type',
  templateUrl: 'item-type.component.html'
})
export class ItemTypeComponent {
  @Input()
  type: itemType;
}
