import { Component, Input } from '@angular/core';
import { Expansion } from '../models/Expansion';

@Component({
  selector: 'item-expansion',
  templateUrl: 'item-expansion.component.html',
  styleUrls: []
})
export class ItemExpansionComponent {
  @Input()
  expansion: Expansion;
}
