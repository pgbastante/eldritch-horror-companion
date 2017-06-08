import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MenuRoutingComponent } from './menu-routing.component';
import { ConfigurationModule } from './configuration/configuration.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GeneratorModule } from './generator/generator.module';
import { ItemModule } from './item/item.module';

import '../styles/core.less';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: '/components',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdButtonModule,
    RouterModule.forRoot(appRoutes),
    ConfigurationModule,
    MdToolbarModule,
    MdSidenavModule,
    FlexLayoutModule,
    GeneratorModule,
    ItemModule
  ],
  declarations: [
    MenuRoutingComponent
  ],
  bootstrap: [MenuRoutingComponent],
  providers: []
})
export class AppModule {
}


