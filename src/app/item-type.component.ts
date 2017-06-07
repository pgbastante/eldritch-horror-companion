import { Component, Input } from '@angular/core';
@Component({
  selector: 'item-type',
  templateUrl: 'item-type.component.html'
})
export class ItemTypeComponent {
  @Input()
  type: string;
}
