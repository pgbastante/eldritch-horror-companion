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

  onChange(event: MdSlideToggleChange) {
    this.expansion.available = event.checked;
    ExpansionService.setAvailability(this.expansion.key, this.expansion.available);
  }
}
