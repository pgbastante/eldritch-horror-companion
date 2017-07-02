import { NgModule } from '@angular/core';
import { ListMenuComponent } from './list-menu.component';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ItemModule } from '../item/item.module';
import { MdCardModule, MdIconModule, MdTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListRouterModule } from './list-router.module';
@NgModule({
  imports: [
    CommonModule,
    ItemModule,
    MdCardModule,
    MdIconModule,
    FlexLayoutModule,
    MdTabsModule,
    ListRouterModule
  ],
  declarations: [ListMenuComponent, ListComponent],
  bootstrap: [],
  providers: []
})
export class ListModule {
}

