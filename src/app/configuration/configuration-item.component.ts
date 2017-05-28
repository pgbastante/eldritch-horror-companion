import { Component, Input } from '@angular/core';
import { Expansion } from '@angular/compiler';

@Component({
  selector: 'configuration-item',
  templateUrl: 'configuration-item.component.html',
  styleUrls: ['configuration-item.component.css']
})
export class ConfigurationItemComponent {
  @Input()
  expansion: Expansion;
}
