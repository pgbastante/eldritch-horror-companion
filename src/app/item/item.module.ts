import { NgModule } from '@angular/core';
import { ItemTypeComponent } from './item-type.component';
import { ItemCategoryComponent } from './item-category.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemCategoryComponent, ItemTypeComponent],
  exports: [ItemCategoryComponent, ItemTypeComponent]
})
export class ItemModule {

}
