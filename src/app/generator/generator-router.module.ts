import { RouterModule, Routes } from '@angular/router';
import { RandomItemGeneratorComponent } from './generator.component';
import { GeneratorMenuListComponent } from './generator-menu-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: GeneratorMenuListComponent},
  {path: 'randomize', component: RandomItemGeneratorComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GeneratorRouterModule {

}
