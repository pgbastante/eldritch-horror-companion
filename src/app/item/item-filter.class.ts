import { Item } from '../models/Item';
import { ExpansionService } from '../services/expansion.service';

export abstract class ItemFilter {

  items: Item[];
  selectedCategories: Item[];

  constructor(protected service: ExpansionService) {

  }

  setItems(items: Item[]) {
    this.items = items || [];
  }

  setSelectedCategories(selectedCategories: Item[]) {
    this.selectedCategories = selectedCategories || [];
  }

  public filterItems() {
    let availableExpansions: Array<string> = this.service.getAvailableExpansions();

    return this.items.filter((item: any) => {

      if (this.isOnTheAvailableExpansions(availableExpansions, item)) {
        return false;
      }

      if (this.noCategoriesSelected()) {
        return true;
      }

      return this.matchCategories(item);
    });
  }

  abstract matchCategories(item: any): boolean;

  private noCategoriesSelected() {
    return this.selectedCategories.length === 0;
  }

  private isOnTheAvailableExpansions(availableExpansions: Array<string>, item: any) {
    return !availableExpansions.includes(item.expansion);
  }
}
