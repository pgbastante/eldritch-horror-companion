import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomItemGeneratorProvider } from './generator.provider';
import { ItemFilterProvider } from '../item/item-filter.provider';

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
              private provider: RandomItemGeneratorProvider,
              private itemFilterProvider: ItemFilterProvider) {
  }

  back = function () {
    this.router.navigate(['/generator']);
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemType = params['type'];
      this.selectedCategories = JSON.parse(params['categories']);
      this.items = this.provider.getItems(this.itemType);
      this.generateRandomItem();
    });
  }

  generateRandomItem() {
    let itemFilterClass = this.itemFilterProvider.getInstance(this.itemType),
      itemFilterInstance = new itemFilterClass(this.items, this.selectedCategories);
    this.generatedItem = this.randomItem(itemFilterInstance.filterItems());
  }

  private randomItem = function (items: Array<any>) {
    return items[Math.floor(Math.random() * items.length)];
  };
}
