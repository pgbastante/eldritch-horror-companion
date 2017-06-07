import { Injectable } from '@angular/core';
import { ArtifactService } from './artifact.service';
import { AssetService } from './asset.service';
import { ConditionService } from './condition.service';
import { SpellService } from './spell.service';
import { LocationService } from './location.service';
import { UniqueAssetService } from './unique-asset.service';
@Injectable()
export class RandomItemGeneratorProvider {
  map = {
    artifact: ArtifactService,
    asset: AssetService,
    condition: ConditionService,
    location: LocationService,
    spell: SpellService,
    'unique-asset': UniqueAssetService
  };

  getItems(type: string) {
    let selectedFactory = this.map[type];
    return selectedFactory.getDataStatic();
  }
}


