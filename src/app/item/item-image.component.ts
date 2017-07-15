import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-image',
  templateUrl: 'item-image.component.html',
  styleUrls: ['item-image.component.css']
})
export class ItemImageComponent {
  @Input()
  image: string;
  @Input()
  size: string;
}
