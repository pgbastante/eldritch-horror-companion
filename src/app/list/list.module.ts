import { NgModule } from '@angular/core';
import { ListMenuComponent } from './list-menu.component';
import { listRoutes } from './list.routes';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ItemModule } from '../item/item.module';
@NgModule({
  imports: [
    listRoutes,
    CommonModule,
    ItemModule
  ],
  declarations: [ListMenuComponent, ListComponent],
  bootstrap: [],
  providers: []
})
export class ListModule {
}

