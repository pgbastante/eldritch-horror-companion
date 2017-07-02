import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdListModule, MdSelectModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { MenuRoutingComponent } from './menu-routing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemModule } from './item/item.module';

import '../styles/core.less';
import { AppRouterModule } from './app-router.module';
import { FormsModule } from '@angular/forms';
import { LanguageSelectorComponent } from './language-selector.component';
import { ListModule } from './list/list.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    FlexLayoutModule,
    ItemModule,
    MdSelectModule,
    FormsModule,
    ListModule,
    AppRouterModule
  ],
  declarations: [
    MenuRoutingComponent, LanguageSelectorComponent
  ],
  bootstrap: [MenuRoutingComponent],
  providers: []
})
export class AppModule {
}


