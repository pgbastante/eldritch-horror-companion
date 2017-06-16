import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule'},
  {path: 'home', loadChildren: './menu/home-menu.module#HomeMenuModule'},
  {path: 'generator', loadChildren: './generator/generator.module#GeneratorModule'},
  {path: 'list', loadChildren: './list/list.module#ListModule'},
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
