import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RandomItemGeneratorComponent } from './generator.component';
import { GeneratorMenuListComponent } from './generator-menu-list.component';

const routes: Routes = [
  {path: '', component: GeneratorMenuListComponent},
  {path: 'randomize', component: RandomItemGeneratorComponent}
];

export const generatorRoutes: ModuleWithProviders = RouterModule.forChild(routes);
