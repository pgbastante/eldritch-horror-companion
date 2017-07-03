import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListMenuComponent } from './list-menu.component';
import { ListComponent } from './list.component';
import { ItemViewComponent } from '../item/item-view.component';
const routes: Routes = [
  {
    path: 'list', component: ListMenuComponent, children: [
    {path: 'spells', component: ListComponent, outlet: 'list-router'},
    {path: 'ancient-ones', component: ListComponent, outlet: 'list-router'},
    {path: 'assets', component: ListComponent, outlet: 'list-router'},
    {path: 'unique-assets', component: ListComponent, outlet: 'list-router'},
    {path: 'conditions', component: ListComponent, outlet: 'list-router'},
    {path: 'investigators', component: ListComponent, outlet: 'list-router'},
    {path: 'locations', component: ListComponent, outlet: 'list-router'},
    {path: 'artifacts', component: ListComponent, outlet: 'list-router'},
    {path: 'spells/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'ancient-ones/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'assets/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'unique-assets/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'conditions/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'investigators/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'locations/:id', component: ItemViewComponent, outlet: 'list-router'},
    {path: 'artifacts/:id', component: ItemViewComponent, outlet: 'list-router'}
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListRouterModule {

}
