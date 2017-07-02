import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule'},
  {path: 'home', loadChildren: './menu/home-menu.module#HomeMenuModule'},
  {path: 'generator', loadChildren: './generator/generator.module#GeneratorModule'},
//  {
//    path: '**',
//    redirectTo: '/home',
//    pathMatch: 'full'
//  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {

}
