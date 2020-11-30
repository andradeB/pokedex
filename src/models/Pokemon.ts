import { PokemonType } from './PokemonType';

export interface Pokemon {
  id: number;
  types: Array<PokemonType | string>;
  name: string;
  image: string;
}
