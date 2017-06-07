import { Item } from './Item';

export class Asset extends Item {
  type = 'asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'teamwork'
  ];
}

export class UniqueAsset extends Item {
  type = 'unique-asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'teamwork'
  ];
}

export class Artifact extends Item {
  type = 'artifact';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'teamwork'
  ];
}

export type assetCategory =
  'trinket'
  | 'weapon'
  | 'ally'
  | 'service'
  | 'magical'
  | 'relic'
  | 'tome'
  | 'other'
  | 'teamwork' ;
