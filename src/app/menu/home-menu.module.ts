import { NgModule } from '@angular/core';
import { homeRoutes } from './home-menu.routes';
import { HomeMenuListComponent } from './home-menu-list.component';
import { MdGridListModule } from '@angular/material';

@NgModule({
  imports: [homeRoutes,MdGridListModule],
  declarations: [HomeMenuListComponent]
})
export class HomeMenuModule {
}
