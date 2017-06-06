import { Item } from './Item';

export class Location extends Item {
  type = 'location';
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
