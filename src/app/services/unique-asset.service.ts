import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class UniqueAssetService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/unique-assets.${locale}.json`);
  }
}
