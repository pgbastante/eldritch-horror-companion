import { NgModule } from '@angular/core';
import { ItemTypeComponent } from './item-type.component';
import { ItemCategoryComponent } from './item-category.component';
import { CommonModule } from '@angular/common';
import { IconsPipe } from '../pipes/icons.pipe';
import { ItemComponent } from './item.component';
import { MdCardModule } from '@angular/material';
import { ExpansionModule } from '../expansions/expansion.module';
import { ItemViewComponent } from './item-view.component';
import { ItemProvider } from './item.provider';
import { AncientOneService } from '../services/ancient-one.service';
import { ArtifactService } from '../services/artifact.service';
import { AssetService } from '../services/asset.service';
import { UniqueAssetService } from '../services/unique-asset.service';
import { InvestigatorService } from '../services/investigator.service';
import { LocationService } from '../services/location.service';
import { SpellService } from '../services/spell.service';
import { ConditionService } from '../services/condition.service';
import { ItemFilterProvider } from './item-filter.provider';
import { ItemFilterAllCategories } from './item-filter-all-categories.class';
import { ItemFilterOneCategory } from './item-filter-one-category.class';
import { ItemLocationComponent } from './item-location.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MdCardModule, ExpansionModule, RouterModule],
  declarations: [ItemCategoryComponent, ItemTypeComponent, ItemComponent, IconsPipe, ItemViewComponent, ItemLocationComponent],
  providers: [
    ItemProvider,
    AncientOneService,
    ArtifactService,
    AssetService,
    UniqueAssetService,
    ConditionService,
    InvestigatorService,
    LocationService,
    SpellService,
    ItemFilterProvider,
    ItemFilterAllCategories,
    ItemFilterOneCategory
  ],
  exports: [ItemCategoryComponent, ItemTypeComponent, ItemComponent, IconsPipe, ItemViewComponent]
})
export class ItemModule {

}
