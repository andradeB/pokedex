import { BackgroundColors } from './BackgroundColors';
import { TextColors } from './TextColors';
import { defaultTextColors } from './Colors';

export class ThemeBase {
  default_background: BackgroundColors = {
    defaultBgActiveButton: '#EA5D60',
    defaultBgInput: '#F2F2F2',
    defaultBgPressedInput: '#E2E2E2',
    defaultBgModalOpacity: 0.25,
    defaultBg: '#FFFFFF',
  };
  color_text: TextColors = defaultTextColors;
  border_radius: number = 10;
}
