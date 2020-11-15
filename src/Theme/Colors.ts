import { PokemonType } from 'models';
import { Height } from '../models/Height';
import { Weight } from '../models/Weight';

export const TypeColors = new Map<PokemonType | string, string>([
  ['bug', '#8CB230'],
  ['dark', '#8CB230'],
  ['dragon', '#0F6AC0'],
  ['electric', '#0F6AC0'],
  ['fairy', '#ED6EC7'],
  ['fighting', '#D04164'],
  ['fire', '#FD7D24'],
  ['flying', '#748FC9'],
  ['ghost', '#556AAE'],
  ['grass', '#62B957'],
  ['ground', '#DD7748'],
  ['ice', '#DD7748'],
  ['normal', '#9DA0AA'],
  ['poison', '#A552CC'],
  ['psychic', '#EA5D60'],
  ['rock', '#BAAB82'],
  ['steel', '#417D9A'],
  ['water', '#4A90DA'],
]);

export const TypeBackgroundColors = new Map<PokemonType, string>([
  ['bug', '#8BD674'],
  ['dark', '#6F6E78'],
  ['dragon', '#7383B9'],
  ['electric', '#F2CB55'],
  ['fairy', '#F2CB55'],
  ['fighting', '#EB4971'],
  ['fire', '#EB4971'],
  ['flying', '#83A2E3'],
  ['ghost', '#8571BE'],
  ['grass', '#8BBE8A'],
  ['ground', '#F78551'],
  ['ice', '#91D8DF'],
  ['normal', '#B5B9C4'],
  ['poison', '#9F6E97'],
  ['psychic', '#FF6568'],
  ['rock', '#D4C294'],
  ['steel', '#4C91B2'],
  ['water', '#4C91B2'],
]);

export const HeightColors = new Map<Height, string>([
  [Height.MEDIUM, '#AEBFD7'],
  [Height.SHORT, '#FFC5E6'],
  [Height.TALL, '#FFC5E6'],
]);

export const WeightColors = new Map<Weight, string>([
  [Weight.HEAVY, '#57B2DC'],
  [Weight.LIGHT, '#99CD7C'],
  [Weight.NORMAL, '#57B2DC'],
]);

export const defaultTextColors = {
  white: '#FFFFFF',
  black: '#17171B',
  grey: '#747476',
  grey2: '#17171B',
};
