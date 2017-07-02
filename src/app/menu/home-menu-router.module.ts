import { RouterModule, Routes } from '@angular/router';
import { HomeMenuListComponent } from './home-menu-list.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {path: '', component: HomeMenuListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRouterModule {

}
