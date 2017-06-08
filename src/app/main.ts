import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { LocaleService } from './services/locale.service';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: LocaleService.getProvider()
});
