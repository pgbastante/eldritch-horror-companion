import { spellCategory } from './Spell';
import { assetCategory } from './Asset';
import { conditionCategory } from './Condition';
import { locationCategory } from './Location';
import { expansionType } from './Expansion';

export class Item {
  name: string;
  type: string;
  categories: spellCategory[] | assetCategory[] | conditionCategory[] | locationCategory[];
  expansion: expansionType;
}
