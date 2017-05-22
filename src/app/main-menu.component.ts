import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.component.html'
})
export class MainMenuComponent {
  types: Card[] = [new Spell(), new Asset(), new UniqueAsset(), new Condition(), new Location()];
  close = function () {
    //TODO - Find a way to close all othe menu items
  };
}

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent {
  @Input()
  type: Card;
  displayCategories: boolean = false;
  @Output()
  toggleDisplayEvent: EventEmitter<Card> = new EventEmitter<Card>();
  toggleDisplay = function () {
    this.displayCategories = !this.displayCategories;
    this.toggleDisplayEvent.emit(this.type);
  };
}

class Card {
  name: string;
  categories: spellCategory[] | assetCategory[] | conditionCategory[] | locationCategory[];
}

class Spell extends Card {
  name = 'Spell';
  categories: spellCategory[] = ['incantation', 'glamour', 'ritual'];
}

type spellCategory = 'incantation' | 'glamour' | 'ritual';

class Asset extends Card {
  name = 'Asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'item',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'reckoning',
    'teamwork'
  ];
}

class UniqueAsset extends Card {
  name = 'Unique Asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'item',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'reckoning',
    'teamwork'
  ];
}

type assetCategory =
  'trinket'
  | 'weapon'
  | 'item'
  | 'ally'
  | 'service'
  | 'magical'
  | 'relic'
  | 'tome'
  | 'other'
  | 'reckoning'
  | 'teamwork' ;

class Condition extends Card {
  name = 'Condition';
  categories: conditionCategory[] = [
    'bane',
    'boon',
    'deal',
    'exposure',
    'illness',
    'madness',
    'pursuit',
    'restriction',
    'talent'
  ];
}

type conditionCategory =
  'bane'
  | 'boon'
  | 'deal'
  | 'exposure'
  | 'illness'
  | 'madness'
  | 'pursuit'
  | 'restriction'
  | 'talent';

class Location extends Card {
  name = 'Location';
  categories: locationCategory[] = [
    'world',
    'antarctica',
    'pyramids',
    'dreamlands'
  ];
}

type locationCategory =
  'world'
  | 'antarctica'
  | 'pyramids'
  | 'dreamlands';
