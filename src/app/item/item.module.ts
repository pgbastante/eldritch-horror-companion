import { NgModule } from '@angular/core';
import { ItemTypeComponent } from './item-type.component';
import { ItemCategoryComponent } from './item-category.component';
import { CommonModule } from '@angular/common';
import { IconsPipe } from '../pipes/icons.pipe';
import { ItemComponent } from './item.component';
import { MdCardModule } from '@angular/material';
import { ExpansionModule } from '../expansions/expansion.module';
import { ItemViewComponent } from './item-view.component';

@NgModule({
  imports: [CommonModule, MdCardModule, ExpansionModule],
  declarations: [ItemCategoryComponent, ItemTypeComponent, ItemComponent, IconsPipe, ItemViewComponent],
  exports: [ItemCategoryComponent, ItemTypeComponent, ItemComponent, IconsPipe, ItemViewComponent]
})
export class ItemModule {

}
