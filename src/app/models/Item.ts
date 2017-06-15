import { spellCategory } from './Spell';
import { assetCategory } from './Asset';
import { conditionCategory } from './Condition';
import { locationCategory } from './Location';
import { expansionType } from './Expansion';
import { investigatorCategory } from './Investigator';
import { ancientOneCategory } from './AncientOne';

export class Item {
  name: string;
  type: string;
  categories: spellCategory[] | assetCategory[] | conditionCategory[] | locationCategory[] | commonCategoy[] | investigatorCategory[] | ancientOneCategory[];
  expansion: expansionType;
  front: string;
  reckoning: string;
  image: string;
}

export type commonCategoy =
  'common'
  | 'teamwork'
  | 'character'
  | 'object'
  | 'elixir';
