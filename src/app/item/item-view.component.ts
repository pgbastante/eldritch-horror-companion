import { Component, OnInit } from '@angular/core';
import { Item, itemType } from '../models/Item';
import { ActivatedRoute } from '@angular/router';
import { ItemProvider } from './item.provider';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'item-view',
  templateUrl: 'item-view.component.html',
  styleUrls: ['item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item: Item;
  itemType: itemType;
  id: number | string;

  constructor(private route: ActivatedRoute,
              private itemProvider: ItemProvider) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemService: ItemService, items: Array<Item>;
      this.itemType = this.route.snapshot.url[0].path as itemType;
      itemService = this.itemProvider.getInstance(this.itemType);
      this.id = params['id'];
      items = itemService.getAll();
      this.item = items.filter((obj: Item) => {
        return ('id' in obj && obj.id === parseInt(params['id']));
      })[0];
    });
  }
}
