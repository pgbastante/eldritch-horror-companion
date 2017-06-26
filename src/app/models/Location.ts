import { Item, itemType } from './Item';

export class Location extends Item {
  type: itemType = 'location';
  categories: locationCategory[] = [
    'world',
    'antarctica',
    'pyramids',
    'dreamlands'
  ];
}

export type locationCategory =
  'world'
  | 'antarctica'
  | 'pyramids'
  | 'dreamlands';
