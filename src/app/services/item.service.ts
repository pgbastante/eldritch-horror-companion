import { LocaleService } from './locale.service';
import { Item } from '../models/Item';

export abstract class ItemService {
  items: Item[];

  constructor() {
    this.initService();
  }

  initService() {
    this.items = this.requireItems(LocaleService.getLocale());
  }

  getAll() {
    return this.items;
  }

  getById(id: number){
    return this.items.find((item) => item.id === id);
  }

  abstract requireItems(locale: string): Item[];
}
