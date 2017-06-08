import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class LocationService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/locations.${locale}.json`);
  }
}
