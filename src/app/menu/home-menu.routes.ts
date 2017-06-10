import { RouterModule, Routes } from '@angular/router';
import { HomeMenuListComponent } from './home-menu-list.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {path: '', component: HomeMenuListComponent}
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
