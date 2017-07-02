import { Item, itemType } from './Item';

export class Location extends Item {
  code: number | string;
  connections: Array<number>;
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
