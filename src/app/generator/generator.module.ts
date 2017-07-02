import { NgModule } from '@angular/core';
import { RandomItemGeneratorComponent } from './generator.component';
import { MdButtonModule, MdCheckboxModule, MdListModule } from '@angular/material';
import { ItemModule } from '../item/item.module';
import { ExpansionModule } from '../expansions/expansion.module';
import { GeneratorMenuListComponent } from './generator-menu-list.component';
import { GeneratorMenuListItemComponent } from './generator-menu-list-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeneratorRouterModule } from './generator-router.module';

@NgModule({
  imports: [
    GeneratorRouterModule,
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
  providers: []
})
export class GeneratorModule {
}


