import { Component } from '@angular/core';
import { LocaleService } from './services/locale.service';
import { MdSelectChange } from '@angular/material';
require('../styles/flags.less');

@Component({
  selector: 'language-selector',
  templateUrl: 'language-selector.component.html',
  styleUrls: ['language-selector.component.css']
})
export class LanguageSelectorComponent {
  availableLanguages = [{key: 'es', flag: 'es'}, {key: 'en', flag: 'us'}];
  selectedLanguage = LocaleService.getLocale();
  latestChangeEvent = MdSelectChange;

  languageChange(event: any) {
    LocaleService.setLocale(event.value);
  }

}
