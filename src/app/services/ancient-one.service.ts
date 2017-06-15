import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class AncientOneService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/ancient-ones.${locale}.json`);
  }
}
