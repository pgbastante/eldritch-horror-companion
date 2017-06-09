import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule'},
  {
    path: '**',
    redirectTo: '/components',
    pathMatch: 'full'
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
