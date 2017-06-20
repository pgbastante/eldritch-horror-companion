import { NgModule } from '@angular/core';
import { ExpansionNameComponent } from './expansion-name.component';
import { CommonModule } from '@angular/common';
import { ExpansionService } from '../services/expansion.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpansionNameComponent],
  providers: [ExpansionService],
  exports: [ExpansionNameComponent]
})
export class ExpansionModule {

}
