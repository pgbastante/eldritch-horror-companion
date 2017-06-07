import { LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';

export class LocaleService {

  static validLocales: Array<string> = ['es', 'en'];

  static getLocale() {
    return localStorage.getItem('localeId') || 'en';
  }

  static setLocale(id: string) {
    if (this.checkValidLocale(id)) {
      localStorage.setItem('localeId', id);
      window.location.reload();
    }
  }

  static getTranslation() {
    let localeId = this.getLocale();
    return require(`../assets/i18n/messages.${localeId}.xlf`);
  }

  static getProvider() {
    return [
      {provide: TRANSLATIONS, useValue: this.getTranslation()},
      {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
      {provide: LOCALE_ID, useValue: this.getLocale()}
    ];
  }

  static checkValidLocale(localeId: string) {
    return this.validLocales.find(locale => locale === localeId);
  }
}
