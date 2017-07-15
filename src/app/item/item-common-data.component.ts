import { Component, Input } from '@angular/core';
import { Spell } from '../models/Spell';
import { Artifact, Asset, UniqueAsset } from '../models/Asset';
import { Condition } from '../models/Condition';

@Component({
  selector: 'item-common-data',
  templateUrl: 'item-common-data.component.html',
  styleUrls: []
})
export class ItemCommonDataComponent {
  @Input()
  item: Spell | Artifact | Asset | UniqueAsset | Condition;
}
