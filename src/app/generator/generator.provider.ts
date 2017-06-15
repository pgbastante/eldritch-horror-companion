import { Injectable } from '@angular/core';
import { ArtifactService } from '../services/artifact.service';
import { AssetService } from '../services/asset.service';
import { ConditionService } from '../services/condition.service';
import { SpellService } from '../services/spell.service';
import { LocationService } from '../services/location.service';
import { UniqueAssetService } from '../services/unique-asset.service';
import { InvestigatorService } from '../services/investigator.service';
import { AncientOneService } from '../services/ancient-one.service';

@Injectable()
export class RandomItemGeneratorProvider {
  map = {
    artifact: ArtifactService,
    asset: AssetService,
    condition: ConditionService,
    location: LocationService,
    spell: SpellService,
    'unique-asset': UniqueAssetService,
    investigator: InvestigatorService,
    'ancient-one': AncientOneService
  };

  getItems(type: string) {
    let selectedFactory = this.map[type];
    return selectedFactory.getDataStatic();
  }
}


