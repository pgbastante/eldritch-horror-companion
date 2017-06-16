import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/Item';
import { RandomItemGeneratorProvider } from '../generator/generator.provider';
@Component({
  selector: 'list-items',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  itemType: any;
  items: Item[] = [];

  constructor(private route: ActivatedRoute,
              private itemProvider: RandomItemGeneratorProvider) {
  }

  ngOnInit() {
    this.itemType = this.route.snapshot.url[0].path;
    this.items = this.itemProvider.getItems(this.itemType);
  }
}
