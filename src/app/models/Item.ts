import { spellCategory } from './Spell';
import { assetCategory } from './Asset';
import { conditionCategory } from './Condition';
import { locationCategory } from './Location';
import { expansionType } from './Expansion';
import { investigatorCategory } from './Investigator';

export class Item {
  name: string;
  type: string;
  categories: spellCategory[] | assetCategory[] | conditionCategory[] | locationCategory[] | commonCategoy[] | investigatorCategory[];
  expansion: expansionType;
  front: string;
  reckoning: string;
}

export type commonCategoy =
  'common'
  | 'teamwork'
  | 'character'
  | 'object'
  | 'elixir';
