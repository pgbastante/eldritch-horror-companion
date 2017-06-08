import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class ConditionService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/conditions.${locale}.json`);
  }
}
