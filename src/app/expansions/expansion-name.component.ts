import { Component, Input } from '@angular/core';
@Component({
  selector: 'expansion-name',
  templateUrl: 'expansion-name.component.html'
})
export class ExpansionNameComponent {
  @Input()
  expansion: string;
}
