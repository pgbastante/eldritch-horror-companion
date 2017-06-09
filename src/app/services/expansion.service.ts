import { Injectable } from '@angular/core';
import { Expansion, expansionTypes } from '../models/Expansion';

@Injectable()
export class ExpansionService {
  static getDataStatic() {
    let expansions: Array<Expansion> = [];
    for (let type of expansionTypes) {
      let expansionConfiguration = new Expansion();
      expansionConfiguration.key = type;
      expansionConfiguration.available = this.getAvailability(type);
      expansions.push(expansionConfiguration);
    }
    return expansions;
  }

  static setAvailability(key: string, value: boolean) {
    localStorage.setItem(key, String(value));
  }

  static getAvailability(key: string) {
    return localStorage.getItem(key) === 'true';
  }

  /**
   * Return the keys of all available expansions, plus the base game witch is allways available
   * @returns {Array<string>}
   */
  static getAvailableExpansions() {
    let availableExpansions: Array<string> = ['base'];
    for (let type of expansionTypes) {
      if (ExpansionService.getAvailability(type)) {
        availableExpansions.push(type);
      }
    }
    return availableExpansions;
  }
}
