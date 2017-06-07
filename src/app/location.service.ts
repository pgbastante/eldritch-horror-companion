import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class LocationService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`../assets/items/locations.${locale}.json`);
  }
}
