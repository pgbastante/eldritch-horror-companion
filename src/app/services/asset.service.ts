import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class AssetService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/assets.${locale}.json`);
  }
}
