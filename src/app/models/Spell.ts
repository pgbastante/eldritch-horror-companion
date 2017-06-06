import { Item } from './Item';

export class Spell extends Item {
  type = 'spell';
  categories: spellCategory[] = ['incantation', 'glamour', 'ritual'];
}

export type spellCategory = 'incantation' | 'glamour' | 'ritual';
