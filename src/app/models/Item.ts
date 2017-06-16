import { spellCategory } from './Spell';
import { assetCategory } from './Asset';
import { conditionCategory } from './Condition';
import { locationCategory } from './Location';
import { expansionType } from './Expansion';
import { investigatorCategory } from './Investigator';
import { ancientOneCategory } from './AncientOne';

export class Item {
  id: string | number;
  name: string;
  type: string;
  categories: itemCategoryType[];
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

export type itemCategoryType =
  spellCategory
  | assetCategory
  | conditionCategory
  | locationCategory
  | commonCategoy
  | investigatorCategory
  | ancientOneCategory;
