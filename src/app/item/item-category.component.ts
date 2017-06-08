import { Component, Input } from '@angular/core';
@Component({
  selector: 'item-category',
  templateUrl: 'item-category.component.html'
})
export class ItemCategoryComponent {
  @Input()
  category: string;
}
