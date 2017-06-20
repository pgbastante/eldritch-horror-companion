import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemFilterProvider } from '../item/item-filter.provider';
import { ItemProvider } from '../item/item.provider';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'random-item-generator',
  templateUrl: 'generator.component.html',
  styleUrls: ['generator.component.css']
})
export class RandomItemGeneratorComponent implements OnInit {
  itemType: string;
  selectedCategories: Item[];
  generatedItem: Item;
  items: Item[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private provider: ItemProvider,
              private itemFilterProvider: ItemFilterProvider) {
  }

  back = function () {
    this.router.navigate(['/generator']);
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemService: ItemService;
      this.itemType = params['type'];
      itemService = this.provider.getInstance(this.itemType);
      this.selectedCategories = JSON.parse(params['categories']);
      this.items = itemService.getAll();
      this.generateRandomItem();
    });
  }

  generateRandomItem() {
    let itemFilter = this.itemFilterProvider.getInstance(this.itemType);
    itemFilter.setItems(this.items);
    itemFilter.setSelectedCategories(this.selectedCategories);
    this.generatedItem = this.randomItem(itemFilter.filterItems());
  }

  private randomItem = function (items: Array<any>) {
    return items[Math.floor(Math.random() * items.length)];
  };
}
