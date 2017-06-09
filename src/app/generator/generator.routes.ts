import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RandomItemGeneratorComponent } from './generator.component';
import { MenuListComponent } from './generator-list.component';

const routes: Routes = [
  {path: 'randomize', component: RandomItemGeneratorComponent},
  {path: 'components', component: MenuListComponent}
];

export const generatorRoutes: ModuleWithProviders = RouterModule.forChild(routes);
