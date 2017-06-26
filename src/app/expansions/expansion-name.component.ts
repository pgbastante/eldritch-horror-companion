import { Component, Input } from '@angular/core';
import { expansionType } from '../models/Expansion';

@Component({
  selector: 'expansion-name',
  templateUrl: 'expansion-name.component.html'
})
export class ExpansionNameComponent {
  @Input()
  expansion: expansionType;
}
