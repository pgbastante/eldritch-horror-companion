import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MenuListComponent } from './menu-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RandomItemGeneratorComponent } from './random-item-generator.component';
import { MenuListItemComponent } from './menu-list-item.component';
import { MenuRoutingComponent } from './menu-routing.component';
import { ItemService } from './item.service';
import { ConfigurationModule } from './configuration/configuration.module';
import '../styles/core.less';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemTypeComponent } from './item-type.component';
import { ItemCategoryComponent } from './item-category.component';
import { ExpansionModule } from './expansion.module';

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
    MdCardModule,
    ConfigurationModule,
    MdToolbarModule,
    MdSidenavModule,
    FlexLayoutModule,
    ExpansionModule
  ],
  declarations: [
    MenuListComponent,
    MenuListItemComponent,
    MenuRoutingComponent,
    RandomItemGeneratorComponent,
    ItemTypeComponent,
    ItemCategoryComponent
  ],
  bootstrap: [MenuRoutingComponent],
  providers: [ItemService]
})
export class AppModule {
}


