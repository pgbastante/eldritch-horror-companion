import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { MenuRoutingComponent } from './menu-routing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemModule } from './item/item.module';

import '../styles/core.less';
import { appRoutes } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdButtonModule,
    appRoutes,
    MdToolbarModule,
    MdSidenavModule,
    FlexLayoutModule,
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


