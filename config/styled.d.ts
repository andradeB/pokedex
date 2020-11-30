import 'styled-components/native';
import { ThemeBase } from 'theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeBase {}
}
