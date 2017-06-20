export class Expansion {
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

export let expansionTypes: Array<expansionType> = [
  'fl'
  , 'mom'
  , 'sr'
  , 'utp'
  , 'soc'
  , 'td'
];
