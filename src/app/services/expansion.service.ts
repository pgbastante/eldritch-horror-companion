import { Injectable } from '@angular/core';
import { Expansion, expansionTypes } from '../models/Expansion';

@Injectable()
export class ExpansionService {
  items: Array<Expansion>;

  constructor() {
    this.initExpansions();
  }

  initExpansions() {
    this.items = [];
    for (let type of expansionTypes) {
      let expansionConfiguration = new Expansion();
      expansionConfiguration.key = type;
      expansionConfiguration.available = this.getAvailability(type);
      this.items.push(expansionConfiguration);
    }
  }

  getAll() {
    return this.items;
  }

  setAvailability(key: string, value: boolean) {
    localStorage.setItem(key, String(value));
  }

  getAvailability(key: string) {
    return localStorage.getItem(key) === 'true';
  }

  /**
   * Return the keys of all available expansions, plus the base game witch is allways available
   * @returns {Array<string>}
   */
  getAvailableExpansions() {
    let availableExpansions: Array<string> = ['base'];
    for (let type of expansionTypes) {
      if (this.getAvailability(type)) {
        availableExpansions.push(type);
      }
    }
    return availableExpansions;
  }
}
