import { BackgroundColors } from './BackgroundColors';
import { TextColors } from './TextColors';

export class ThemeBase {
  default_background: BackgroundColors = {
    defaultBgInput: '#F2F2F2',
    defaultBgPressedInput: '#E2E2E2',
    defaultBgModalOpacity: 0.25,
    defaultBg: '#FFFFFF',
  };
  color_text: TextColors = {
    white: '#FFFFFF',
    black: '#17171B',
    grey: '#747476',
    grey2: '#17171B',
  };
}
