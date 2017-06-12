import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class InvestigatorService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/investigators.${locale}.json`);
  }
}
