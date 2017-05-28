import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemService {
  _data: any;

  static getDataStatic() {
    return require('../assets/cards.json');
  }

  constructor(private http: Http) {
  }

  getData() {
    return this.http
      .get('./cards.json')
      .map(x => x.json())
      .map((data) =>
        this._data = data
      );
  }
}
