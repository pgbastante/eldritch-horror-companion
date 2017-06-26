import { Item, itemType } from './Item';

export class Condition extends Item {
  type: itemType = 'condition';
  categories: conditionCategory[] = [
    'bane',
    'boon',
    'deal',
    'exposure',
    'illness',
    'madness',
    'pursuit',
    'restriction',
    'talent',
    'injury'
  ];
}

export type conditionCategory =
  'bane'
  | 'boon'
  | 'deal'
  | 'exposure'
  | 'illness'
  | 'madness'
  | 'pursuit'
  | 'restriction'
  | 'talent'
  | 'injury';
