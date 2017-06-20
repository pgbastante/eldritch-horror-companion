import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
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
  itemType: string;
  id: number | string;

  constructor(private route: ActivatedRoute,
              private itemProvider: ItemProvider) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemService: ItemService = this.itemProvider.getInstance(this.itemType);
      this.itemType = this.route.snapshot.url[0].path;
      this.id = params['id'];
      let items = itemService.getAll();
      this.item = items.filter((obj: any) => {
        return ('id' in obj && obj.id === parseInt(params['id']));
      })[0];
    });
  }
}
