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
    'teamwork',
    'task'
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
    'teamwork',
    'task'
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
