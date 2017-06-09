import { Component, OnInit } from '@angular/core';
import { ExpansionService } from '../services/expansion.service';
import { Expansion } from '../models/Expansion';

@Component({
  selector: 'configuration-list',
  templateUrl: 'configuration-list.component.html'
})
export class ConfigurationListComponent implements OnInit {
  expansions: Array<Expansion>;
  ngOnInit() {
    this.expansions = ExpansionService.getDataStatic();
  }
}
