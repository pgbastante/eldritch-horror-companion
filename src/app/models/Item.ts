import { spellCategory } from './Spell';
import { assetCategory } from './Asset';
import { conditionCategory } from './Condition';
import { locationCategory } from './Location';

export class Item {
  name: string;
  type: string;
  categories: spellCategory[] | assetCategory[] | conditionCategory[] | locationCategory[];
}
