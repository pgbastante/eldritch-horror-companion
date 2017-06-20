import { ItemFilter } from './item-filter.class';
import { Injectable } from '@angular/core';
import { ExpansionService } from '../services/expansion.service';

@Injectable()
export class ItemFilterOneCategory extends ItemFilter {

  constructor(protected service: ExpansionService) {
    super(service);
  }

  matchCategories(item: any) {
    let matchOne = false;
    for (let category in this.selectedCategories) {
      let cardCategories = item.categories.map((category: string) => category.toLowerCase());
      if (this.selectedCategories[category] && cardCategories.includes(category)) {
        matchOne = true;
        break;
      }
    }
    return matchOne;
  }
}
