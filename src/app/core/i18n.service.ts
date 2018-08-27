import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { includes } from 'lodash';
import { BehaviorSubject } from 'rxjs';

import { Logger } from './logger.service';
import * as enUS from '../../translations/en-US.json';
import * as frFR from '../../translations/fr-FR.json';
import localeFr from '@angular/common/locales/fr';
import { DynamicLocaleService } from '@app/core/dynamic-locale.service';

const log = new Logger('I18nService');
const languageKey = 'language';

registerLocaleData(localeFr);

/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param {string} s The string to extract for translation.
 * @return {string} The same string.
 */
export function extract(s: string) {
  return s;
}

@Injectable()
export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];
  language$ = new BehaviorSubject<string>('');

  constructor(private translateService: TranslateService,
              private dynamicLocaleService: DynamicLocaleService) {
    // Embed languages to avoid extra HTTP requests
    translateService.setTranslation('en-US', enUS);
    translateService.setTranslation('fr-FR', frFR);
  }

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param {!string} defaultLanguage The default language to use.
   * @param {Array.<String>} supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => {
        localStorage.setItem(languageKey, event.lang);
        this.dynamicLocaleService.setLocale(event.lang);
      });
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param {string} language The IETF language code to set.
   */
  set language(language: string) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = includes(this.supportedLanguages, language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
    this.language$.next(language);
  }

  /**
   * Gets the current language.
   * @return {string} The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }

}
