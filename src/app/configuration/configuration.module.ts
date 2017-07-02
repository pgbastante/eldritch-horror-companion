import { NgModule } from '@angular/core';
import { ConfigurationItemComponent } from './configuration-item.component';
import { ConfigurationListComponent } from './configuration-list.component';
import { MdSlideToggleModule } from '@angular/material';
import { ExpansionModule } from '../expansions/expansion.module';
import { CommonModule } from '@angular/common';
import { ConfigurationRouterModule } from './configuration-router.module';

@NgModule({
  imports: [ConfigurationRouterModule, MdSlideToggleModule, CommonModule, ExpansionModule],
  declarations: [ConfigurationItemComponent, ConfigurationListComponent],
  bootstrap: [],
  providers: []
})
export class ConfigurationModule {
}


