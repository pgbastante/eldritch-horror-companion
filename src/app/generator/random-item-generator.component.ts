import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpansionService } from '../services/expansion.service';
import { RandomItemGeneratorProvider } from './random-item-generator.provider';

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
              private route: ActivatedRoute,
              private provider: RandomItemGeneratorProvider) {
  }

  back = function () {
    this.router.navigate(['/']);
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemType = params['type'];
      this.selectedCategories = JSON.parse(params['categories']);
      this.items = this.provider.getItems(this.itemType);
      this.generateRandomCard();
    });
  }

  generateRandomCard() {
    this.generatedItem = this.randomItem(this.filterCards());
  }

  private filterCards() {
    let availableExpansions: Array<string> = ExpansionService.getAvailableExpansions();

    return this.items.filter((item: any) => {

      if (this.isOnTheAvailableExpansions(availableExpansions, item)) {
        return false;
      }
      if (this.noCategoriesSelected()) {
        return true;
      }

      return this.itemMatchesAllSelectedCategories(item);
    });
  }

  private itemMatchesAllSelectedCategories(card: any) {
    let matchAll = true;
    for (let category in this.selectedCategories) {
      let cardCategories = card.categories.map((category: string) => category.toLowerCase());
      if (this.selectedCategories[category] && !cardCategories.includes(category)) {
        matchAll = false;
      }
    }
    return matchAll;
  }

  private noCategoriesSelected() {
    return this.selectedCategories.length === 0;
  }

  private isOnTheAvailableExpansions(availableExpansions: Array<string>, item: any) {
    return !availableExpansions.includes(item.expansion);
  }

  private randomItem = function (items: Array<any>) {
    return items[Math.floor(Math.random() * items.length)];
  };
}
