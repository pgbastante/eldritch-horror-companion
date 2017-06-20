import { ItemFilter } from './item-filter.class';
import { Injectable } from '@angular/core';
import { ExpansionService } from '../services/expansion.service';

@Injectable()
export class ItemFilterAllCategories extends ItemFilter {

  constructor(protected service: ExpansionService) {
    super(service);
  }

  matchCategories(item: any) {
    let matchAll = true;
    for (let category in this.selectedCategories) {
      let cardCategories = item.categories.map((category: string) => category.toLowerCase());
      if (this.selectedCategories[category] && !cardCategories.includes(category)) {
        matchAll = false;
      }
    }
    return matchAll;
  }
}
