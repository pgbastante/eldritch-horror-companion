import { Component } from '@angular/core';
import { LocaleService } from './locale.service';
require('../../node_modules/flag-icon-css/less/flag-icon.less');

@Component({
  selector: 'menu-routing',
  templateUrl: 'menu-routing.component.html',
  styleUrls: ['menu-routing.component.css']
})
export class MenuRoutingComponent {
  languageChange(event: Event) {
    let target = event.target as HTMLElement;
    LocaleService.setLocale(target.attributes.getNamedItem('id').value);
  }
}
