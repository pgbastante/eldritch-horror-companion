import { NgModule } from '@angular/core';
import { RandomItemGeneratorComponent } from './generator.component';
import { MdButtonModule, MdCheckboxModule, MdListModule } from '@angular/material';
import { RandomItemGeneratorProvider } from './generator.provider';
import { ItemModule } from '../item/item.module';
import { ExpansionModule } from '../expansions/expansion.module';
import { GeneratorMenuListComponent } from './generator-menu-list.component';
import { GeneratorMenuListItemComponent } from './generator-menu-list-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { generatorRoutes } from './generator.routes';
import { ItemFilterProvider } from '../item/item-filter.provider';

@NgModule({
  imports: [
    generatorRoutes,
    CommonModule,
    ItemModule,
    ExpansionModule,
    MdButtonModule,
    MdCheckboxModule,
    FormsModule,
    MdListModule
  ],
  declarations: [GeneratorMenuListComponent, GeneratorMenuListItemComponent, RandomItemGeneratorComponent],
  bootstrap: [],
  providers: [RandomItemGeneratorProvider, ItemFilterProvider]
})
export class GeneratorModule {
}


