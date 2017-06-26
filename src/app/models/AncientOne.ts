import { Item, itemType } from './Item';
export class AncientOne extends Item {
  type: itemType = 'ancient-one';
  categories: ancientOneCategory[] = [];
}

export type ancientOneCategory = '';
