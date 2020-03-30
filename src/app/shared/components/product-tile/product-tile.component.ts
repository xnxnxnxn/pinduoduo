import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../domain';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.less']
})
export class ProductTileComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
