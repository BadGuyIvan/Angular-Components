import { Component, OnInit } from '@angular/core';
import { Products } from './products.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  products: Products[];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Products('Watersports'),
      new Products('Watersports'),
      new Products('Watersports'),
      new Products('Watersports'),
      new Products('Watersports'),
      new Products('Watersports'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Soccer'),
      new Products('Chess'),
      new Products('Chess'),
      new Products('Chess')
    ]
  }

}
