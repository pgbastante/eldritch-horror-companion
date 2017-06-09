import { ConfigurationListComponent } from './configuration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {path: '', component: ConfigurationListComponent},
];

export const configurationRoutes: ModuleWithProviders = RouterModule.forChild(routes);
