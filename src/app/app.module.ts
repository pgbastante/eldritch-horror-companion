import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdListModule, MdCheckboxModule, MdButtonModule } from '@angular/material';

import { MainMenuComponent, MenuItemComponent } from './main-menu.component';
import '../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
import './app.module.less';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MdListModule, MdCheckboxModule, MdButtonModule],
  declarations: [MenuItemComponent, MainMenuComponent],
  bootstrap: [MainMenuComponent]
})
export class AppModule {
}


