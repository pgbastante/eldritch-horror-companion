import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ListMenuComponent } from './list-menu.component';
import { ListComponent } from './list.component';
import { ItemViewComponent } from '../item/item-view.component';
const routes: Routes = [
  {path: '', component: ListMenuComponent},
  {path: 'spells', component: ListComponent},
  {path: 'ancient-ones', component: ListComponent},
  {path: 'assets', component: ListComponent},
  {path: 'unique-assets', component: ListComponent},
  {path: 'conditions', component: ListComponent},
  {path: 'investigators', component: ListComponent},
  {path: 'locations', component: ListComponent},
  {path: 'artifacts', component: ListComponent},
  {path: 'spells/:id', component: ItemViewComponent},
  {path: 'ancient-ones/:id', component: ItemViewComponent},
  {path: 'assets/:id', component: ItemViewComponent},
  {path: 'unique-assets/:id', component: ItemViewComponent},
  {path: 'conditions/:id', component: ItemViewComponent},
  {path: 'investigators/:id', component: ItemViewComponent},
  {path: 'locations/:id', component: ItemViewComponent},
  {path: 'artifacts/:id', component: ItemViewComponent}
];

export const listRoutes: ModuleWithProviders = RouterModule.forChild(routes);
