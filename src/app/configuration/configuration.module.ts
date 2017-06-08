import { NgModule } from '@angular/core';
import { ConfigurationItemComponent } from './configuration-item.component';
import { ConfigurationListComponent } from './configuration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MdSlideToggleModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ExpansionModule } from '../expansions/expansion.module';

const appRoutes: Routes = [
  {path: 'configuration', component: ConfigurationListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes), MdSlideToggleModule, BrowserModule, ExpansionModule],
  declarations: [ConfigurationItemComponent, ConfigurationListComponent],
  bootstrap: [],
  providers: []
})
export class ConfigurationModule {
}


