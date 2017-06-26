import { Item, itemType } from './Item';

export class Spell extends Item {
  type: itemType = 'spell';
  categories: spellCategory[] = ['incantation', 'glamour', 'ritual'];
}

export type spellCategory = 'incantation' | 'glamour' | 'ritual';
