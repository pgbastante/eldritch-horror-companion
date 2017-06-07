import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class SpellService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`../assets/items/spells.${locale}.json`);
  }
}
