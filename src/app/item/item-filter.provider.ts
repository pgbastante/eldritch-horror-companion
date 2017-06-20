import { Injectable, Injector } from '@angular/core';
import { ItemFilterAllCategories } from './item-filter-all-categories.class';
import { ItemFilterOneCategory } from './item-filter-one-category.class';
@Injectable()
export class ItemFilterProvider {
  map = {
    artifact: ItemFilterAllCategories,
    asset: ItemFilterAllCategories,
    condition: ItemFilterAllCategories,
    location: ItemFilterOneCategory,
    spell: ItemFilterAllCategories,
    'unique-asset': ItemFilterAllCategories,
    investigator: ItemFilterAllCategories,
    'ancient-one': ItemFilterAllCategories
  };

  constructor(private injector: Injector) {

  }

  getInstance(type: string) {
    return this.injector.get(this.map[type]);
  }
}
