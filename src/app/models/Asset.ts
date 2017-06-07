import { Item } from './Item';

export class Asset extends Item {
  type = 'asset';
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
  type = 'unique-asset';
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

export class Artifact extends Item {
  type = 'artifact';
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
