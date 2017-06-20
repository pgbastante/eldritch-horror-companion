import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from './item.service';

@Injectable()
export class AssetService extends ItemService {
  requireItems(locale: string): Item[] {
    return require(`Assets/items/assets.${locale}.json`);
  }
}
