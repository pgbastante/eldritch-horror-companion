import { Item } from './Item';

export class Asset extends Item {
  type = 'Asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'item',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'reckoning',
    'teamwork'
  ];
}

export class UniqueAsset extends Item {
  type = 'Unique Asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'item',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'reckoning',
    'teamwork'
  ];
}

export type assetCategory =
  'trinket'
  | 'weapon'
  | 'item'
  | 'ally'
  | 'service'
  | 'magical'
  | 'relic'
  | 'tome'
  | 'other'
  | 'reckoning'
  | 'teamwork' ;
