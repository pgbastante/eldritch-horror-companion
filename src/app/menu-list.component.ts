import { Component } from '@angular/core';
import { Item } from './models/Item';
import { Spell } from './models/Spell';
import { Asset, UniqueAsset } from './models/Asset';
import { Condition } from './models/Condition';
import { Location } from './models/Location';

@Component({
  selector: 'main-menu-list',
  templateUrl: 'menu-list.component.html'
})
export class MenuListComponent {
  itemTypes: Item[] = [new Spell(), new Asset(), new UniqueAsset(), new Condition(), new Location()];
  close = function () {
    //TODO - Find a way to close all other menu items
  };
}
