import { Item } from './Item';
export class Investigator extends Item {
  type = 'investigator';
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
