import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';

const localeId = localStorage.getItem('localeId') || 'en';
const translation = require(`../assets/i18n/messages.${localeId}.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {provide: TRANSLATIONS, useValue: translation},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
    {provide: LOCALE_ID, useValue: localeId}
  ]
});
