import 'styled-components/native';
import { ThemeBase } from '../Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeBase {}
}
