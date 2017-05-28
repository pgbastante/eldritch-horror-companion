import { Component, Input, OnInit } from '@angular/core';
import { Expansion } from '../models/Expansion';
import { ExpansionService } from './expansion.service';
import { MdSlideToggleChange } from '@angular/material';

@Component({
  selector: 'configuration-item',
  templateUrl: 'configuration-item.component.html',
  styleUrls: ['configuration-item.component.css']
})
export class ConfigurationItemComponent implements OnInit {
  @Input()
  expansion: Expansion;

  ngOnInit() {
    this.expansion.available = ExpansionService.getAvailability(this.expansion.key);
  }

  onChange(event: MdSlideToggleChange) {
    this.expansion.available = event.checked;
    ExpansionService.setAvailability(this.expansion.key, this.expansion.available);
  }

}
