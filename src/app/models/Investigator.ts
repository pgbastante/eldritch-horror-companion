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
}

export type investigatorCategory =
  'combat'
  | 'expedition'
  | 'gate-closer'
  | 'magic'
  | 'support'
  | 'research'
  | 'all-rounder';
