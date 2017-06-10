import { ItemFilter } from './item-filter.class';
export class ItemFilterOneCategory extends ItemFilter {
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
