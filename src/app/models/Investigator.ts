import { Item, itemType } from './Item';
export class Investigator extends Item {
  type: itemType = 'investigator';
  categories: investigatorCategory[] = [
    'combat',
    'expedition',
    'gate-closer',
    'magic',
    'support',
    'research',
    'all-rounder'
  ];
  abilities: Array<string>;
  stats: Object;
  equipment: Array<string>;
  location: string;
  bio: string;
}

export type investigatorCategory =
  'combat'
  | 'expedition'
  | 'gate-closer'
  | 'magic'
  | 'support'
  | 'research'
  | 'all-rounder';
