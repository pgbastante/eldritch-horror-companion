export class Expansion {
  name: string;
  key: expansionType;
  available: boolean;
}

export type expansionType =
  'base'
  | 'fl'
  | 'mom'
  | 'sr'
  | 'utp'
  | 'soc'
  | 'td';

export let expansionTypes = [
  'fl'
  , 'mom'
  , 'sr'
  , 'utp'
  , 'soc'
  , 'td'
];
