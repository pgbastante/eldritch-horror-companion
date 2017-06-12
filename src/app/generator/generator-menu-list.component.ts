import { Component } from '@angular/core';
import { Item } from '../models/Item';
import { Spell } from '../models/Spell';
import { Artifact, Asset, UniqueAsset } from '../models/Asset';
import { Condition } from '../models/Condition';
import { Location } from '../models/Location';
import { Investigator } from '../models/Investigator';

@Component({
  selector: 'generator-menu-list',
  templateUrl: 'generator-menu-list.component.html'
})
export class GeneratorMenuListComponent {
  itemTypes: Item[] = [new Spell(), new Asset(), new UniqueAsset(), new Artifact(), new Condition(), new Location(), new Investigator()];
  close = function () {
    //TODO - Find a way to close all other menu items
  };
}
