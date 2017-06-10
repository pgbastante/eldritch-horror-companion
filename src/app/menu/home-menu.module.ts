import { NgModule } from '@angular/core';
import { homeRoutes } from './home-menu.routes';
import { HomeMenuListComponent } from './home-menu-list.component';

@NgModule({
  imports: [homeRoutes],
  declarations: [HomeMenuListComponent]
})
export class HomeMenuModule {
}
