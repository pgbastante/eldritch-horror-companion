import { Item } from './Item';

export class Condition extends Item {
  type = 'Condition';
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

export type conditionCategory =
  'bane'
  | 'boon'
  | 'deal'
  | 'exposure'
  | 'illness'
  | 'madness'
  | 'pursuit'
  | 'restriction'
  | 'talent';
