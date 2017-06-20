import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from './item.service';

@Injectable()
export class LocationService extends ItemService {
  requireItems(locale: string): Item[] {
    return require(`Assets/items/locations.${locale}.json`);
  }
}
