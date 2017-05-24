import { Item } from './Item';

export class Location extends Item {
  type = 'Location';
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
