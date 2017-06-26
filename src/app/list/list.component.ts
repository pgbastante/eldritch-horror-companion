import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, itemType } from '../models/Item';
import { ItemProvider } from '../item/item.provider';

@Component({
  selector: 'list-items',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  itemType: itemType;
  items: Item[] = [];

  constructor(private route: ActivatedRoute,
              private itemProvider: ItemProvider) {
  }

  ngOnInit() {
    this.itemType = this.route.snapshot.url[0].path as itemType;
    this.items = this.itemProvider.getInstance(this.itemType).getAll();
  }
}
