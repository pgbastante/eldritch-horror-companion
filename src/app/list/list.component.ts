import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/Item';
import { ItemProvider } from '../item/item.provider';
@Component({
  selector: 'list-items',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  itemType: any;
  items: Item[] = [];

  constructor(private route: ActivatedRoute,
              private itemProvider: ItemProvider) {
  }

  ngOnInit() {
    let itemService = this.itemProvider.getInstance(this.itemType);
    this.itemType = this.route.snapshot.url[0].path;
    this.items = itemService.getAll();
  }
}
