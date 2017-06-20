import { Injectable, Injector } from '@angular/core';
import { ArtifactService } from '../services/artifact.service';
import { AssetService } from '../services/asset.service';
import { ConditionService } from '../services/condition.service';
import { SpellService } from '../services/spell.service';
import { LocationService } from '../services/location.service';
import { UniqueAssetService } from '../services/unique-asset.service';
import { InvestigatorService } from '../services/investigator.service';
import { AncientOneService } from '../services/ancient-one.service';

@Injectable()
export class ItemProvider {
  map = {
    artifact: ArtifactService,
    artifacts: ArtifactService,
    asset: AssetService,
    assets: AssetService,
    condition: ConditionService,
    conditions: ConditionService,
    location: LocationService,
    locations: LocationService,
    spell: SpellService,
    spells: SpellService,
    'unique-asset': UniqueAssetService,
    'unique-assets': UniqueAssetService,
    investigator: InvestigatorService,
    investigators: InvestigatorService,
    'ancient-one': AncientOneService,
    'ancient-ones': AncientOneService
  };

  constructor(private injector: Injector) {

  }

  getInstance(type: string) {
    return this.injector.get(this.map[type]);
  }
}


