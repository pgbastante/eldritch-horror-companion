import { Component, Input } from '@angular/core';
import { Expansion } from '../models/Expansion';
import { ExpansionService } from '../services/expansion.service';
import { MdSlideToggleChange } from '@angular/material';

@Component({
  selector: 'configuration-item',
  templateUrl: 'configuration-item.component.html',
  styleUrls: ['configuration-item.component.css']
})
export class ConfigurationItemComponent {
  @Input()
  expansion: Expansion;

  constructor(private service: ExpansionService) {

  }

  onChange(event: MdSlideToggleChange) {
    this.expansion.available = event.checked;
    this.service.setAvailability(this.expansion.key, this.expansion.available);
  }
}
