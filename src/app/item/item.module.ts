import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemTypeComponent } from './item-type.component';
import { ItemCategoryComponent } from './item-category.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ItemCategoryComponent, ItemTypeComponent],
  exports: [ItemCategoryComponent, ItemTypeComponent]
})
export class ItemModule {

}
