import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './models/Item';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: 'src/app/menu-list-item.component.html'
})
export class MenuListItemComponent {
  @Input()
  item: Item;
  displayCategories: boolean = false;
  @Output()
  toggleDisplayEvent: EventEmitter<Item> = new EventEmitter<Item>();
  categories = {};

  constructor(private router: Router) {
  }

  toggleDisplay = function () {
    this.displayCategories = !this.displayCategories;
    this.toggleDisplayEvent.emit(this.type);
  };
  navigateToRandomGenerator = function () {
    this.router.navigate(['/randomize', {categories: JSON.stringify(this.categories), type: this.type.type}]);
  };
}
