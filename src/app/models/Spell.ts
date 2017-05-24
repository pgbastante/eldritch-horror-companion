import { Item } from './Item';

export class Spell extends Item {
  type = 'Spell';
  categories: spellCategory[] = ['incantation', 'glamour', 'ritual'];
}

export type spellCategory = 'incantation' | 'glamour' | 'ritual';
