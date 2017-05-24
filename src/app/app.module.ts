import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdCheckboxModule, MdListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MenuListComponent } from './menu-list.component';
import '../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
import './app.module.less';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RandomItemGeneratorComponent } from './random-item-generator.component';
import { MenuListItemComponent } from './menu-list-item.component';
import { MenuRoutingComponent } from './menu-routing.component';
import { ItemService } from './ItemService';

const appRoutes: Routes = [
  {path: 'components', component: MenuListComponent},
  {path: 'randomize', component: RandomItemGeneratorComponent},
  {
    path: '**',
    redirectTo: '/components',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdListModule,
    MdCheckboxModule,
    MdButtonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MdCardModule
  ],
  declarations: [MenuListComponent, MenuListItemComponent, MenuRoutingComponent, RandomItemGeneratorComponent],
  bootstrap: [MenuRoutingComponent],
  providers: [ItemService]
})
export class AppModule {
}


