export class Expansion {
  name: string;
  key: expansionType;
  available: boolean;
}

export type expansionType =
  'base'
  | 'forsaken-lore'
  | 'mountains-of-madness'
  | 'strange-remnants'
  | 'under-the-piramids'
  | 'signs-of-carcosa'
  | 'the-dreamlands';

export let expansionTypes = [
  'forsaken-lore'
  , 'mountains-of-madness'
  , 'strange-remnants'
  , 'under-the-piramids'
  , 'signs-of-carcosa'
  , 'the-dreamlands'
];
