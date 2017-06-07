import { NgModule } from '@angular/core';
import { ExpansionNameComponent } from './configuration/expansion-name.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [ExpansionNameComponent],
  exports: [ExpansionNameComponent]
})
export class ExpansionModule {

}
