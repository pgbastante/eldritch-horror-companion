import { Item, itemType } from './Item';

export class Asset extends Item {
  type: itemType = 'asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'teamwork',
    'task'
  ];
}

export class UniqueAsset extends Item {
  type: itemType = 'unique-asset';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'teamwork',
    'task'
  ];
}

export class Artifact extends Item {
  type: itemType = 'artifact';
  categories: assetCategory[] = [
    'trinket',
    'weapon',
    'ally',
    'service',
    'magical',
    'relic',
    'tome',
    'other',
    'teamwork',
    'task'
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
  | 'teamwork'
  | 'task';
