import { Injectable } from '@angular/core';
import { LocaleService } from './locale.service';

@Injectable()
export class ArtifactService {
  getDataStatic() {
    let locale = LocaleService.getLocale();
    return require(`../assets/items/artifacts.${locale}.json`);
  }
}
