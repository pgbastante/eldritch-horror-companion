import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from './item.service';

@Injectable()
export class SpellService extends ItemService {
  requireItems(locale: string): Item[] {
    return require(`Assets/items/spells.${locale}.json`);
  }
}
