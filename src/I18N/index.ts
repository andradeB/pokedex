import I18n, { TranslateOptions } from 'i18n-js';
import { pt, en } from './locale';

I18n.translations = { pt, en };

I18n.defaultLocale = 'en';

type translateType = keyof typeof pt;

export const setLanguage = (language: string = 'en') => {
  I18n.locale = language;
};

export const translate = (value: translateType, option?: TranslateOptions) => {
  return I18n.t(value, option);
};
