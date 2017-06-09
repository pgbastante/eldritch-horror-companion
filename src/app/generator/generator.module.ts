import { NgModule } from '@angular/core';
import { RandomItemGeneratorComponent } from './generator.component';
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdListModule } from '@angular/material';
import { RandomItemGeneratorProvider } from './generator.provider';
import { ItemModule } from '../item/item.module';
import { ExpansionModule } from '../expansions/expansion.module';
import { MenuListComponent } from './generator-list.component';
import { MenuListItemComponent } from './generator-list-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { generatorRoutes } from './generator.routes';

@NgModule({
  imports: [
    generatorRoutes,
    CommonModule,
    MdCardModule,
    ItemModule,
    ExpansionModule,
    MdButtonModule,
    MdCheckboxModule,
    FormsModule,
    MdListModule
  ],
  declarations: [MenuListComponent, MenuListItemComponent, RandomItemGeneratorComponent],
  bootstrap: [],
  providers: [RandomItemGeneratorProvider]
})
export class GeneratorModule {
}


