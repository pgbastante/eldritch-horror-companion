import { ItemFilter } from './item-filter.class';
export class ItemFilterAllCategories extends ItemFilter {
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
