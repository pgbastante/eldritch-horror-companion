import { Component, Input } from '@angular/core';
import { Investigator } from '../models/Investigator';

@Component({
  selector: 'item-investigator',
  templateUrl: 'item-investigator.component.html',
  styleUrls: ['item-investigator.component.css']
})
export class ItemInvestigatorComponent {
  @Input()
  item: Investigator;

  keys() {
    return Object.keys(this.item.stats);
  }
}
