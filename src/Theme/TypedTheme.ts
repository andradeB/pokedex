import { PokemonType } from 'models';
import { TypeColors, TypeBackgroundColors } from './Colors';

export class TypedVariant {
  private type: PokemonType;

  constructor(type: PokemonType) {
    this.type = type;
  }

  get color_type() {
    return TypeColors.get(this.type);
  }

  get background_color_type() {
    return TypeBackgroundColors.get(this.type);
  }
}
