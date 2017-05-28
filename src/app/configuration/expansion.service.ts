import { Injectable } from '@angular/core';

@Injectable()
export class ExpansionService {
  static getDataStatic() {
    return require('../../assets/expansions.json');
  }
}
