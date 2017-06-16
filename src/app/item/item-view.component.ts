import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ActivatedRoute } from '@angular/router';
import { RandomItemGeneratorProvider } from '../generator/generator.provider';
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
              private itemProvider: RandomItemGeneratorProvider) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemType = this.route.snapshot.url[0].path;
      this.id = params['id'];
      let items = this.itemProvider.getItems(this.itemType);
      this.item = items.filter((obj: any) => {
        return ('id' in obj && obj.id === parseInt(params['id']));
      })[0];
    });
  }
}
