import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class ArtifactService {
  static getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`Assets/items/artifacts.${locale}.json`);
  }
}
