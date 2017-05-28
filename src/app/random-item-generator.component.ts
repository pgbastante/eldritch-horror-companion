import { Component, OnInit } from '@angular/core';
import { Item } from './models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from './item.service';

@Component({
  selector: 'random-item-generator',
  templateUrl: 'random-item-generator.component.html',
  styleUrls: ['random-item-generator.component.css']
})
export class RandomItemGeneratorComponent implements OnInit {
  itemType: string;
  selectedCategories: Item[];
  generatedItem: Item;
  items: Item[];

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  back = function () {
    this.router.navigate(['/']);
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemType = params['type'];
      this.selectedCategories = JSON.parse(params['categories']);

      this.items = ItemService.getDataStatic();
      this.generateRandomCard();
    });
  }

  generateRandomCard() {
    this.generatedItem = this.randomItem(this.filterCards());
  }

  private filterCards() {
    return this.items.filter((card: any) => {
      if (this.itemType.toLowerCase() === card.type.toLowerCase()) {
        if (this.selectedCategories.length === 0) {
          return true;
        } else {
          let matchAll = true;
          for (let category in this.selectedCategories) {
            let cardCategories = card.categories.map((category: string) => category.toLowerCase());
            if (this.selectedCategories[category] && !cardCategories.includes(category)) {
              matchAll = false;
            }
          }
          return matchAll;
        }
      }
      return false;
    });
  }

  private randomItem = function (items: Array<any>) {

    return items[Math.floor(Math.random() * items.length)];

  };
}
