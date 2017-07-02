import { NgModule } from '@angular/core';
import { HomeMenuListComponent } from './home-menu-list.component';
import { MdGridListModule } from '@angular/material';
import { HomeRouterModule } from './home-menu-router.module';

@NgModule({
  imports: [HomeRouterModule, MdGridListModule],
  declarations: [HomeMenuListComponent]
})
export class HomeMenuModule {
}
