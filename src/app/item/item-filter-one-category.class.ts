import { ItemFilter } from './item-filter.class';
import { Injectable } from '@angular/core';
import { ExpansionService } from '../services/expansion.service';
import { Item } from '../models/Item';

@Injectable()
export class ItemFilterOneCategory extends ItemFilter {

  constructor(protected service: ExpansionService) {
    super(service);
  }

  matchCategories(item: Item) {
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
