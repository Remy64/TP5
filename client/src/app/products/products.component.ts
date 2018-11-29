import {Component, OnInit, Pipe} from '@angular/core';
import { Product} from '../products.service';
import { ProductsService } from '../products.service';

/**
 * Defines the component responsible to manage the display of the products page.
 */
@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})


export class ProductsComponent implements  OnInit{
  // TODO: À compléter
  products: Product[];
  sortingCriteria: string;
  category: string ;
  constructor(private productService: ProductsService) { }
  getProducts(sortingCriteria: string, category: string ): void {
    this.productService.getProducts(sortingCriteria, category).then(products => this.products = products);

  }
selectCriteria(num: number): void {
    switch (num) {
      case 0 : this.sortingCriteria = 'price-asc';
      break;
      case 1 : this.sortingCriteria = 'price-dsc';
      break;
      case 2 : this.sortingCriteria = 'alpha-asc';
      break;
      case 3 : this.sortingCriteria = 'alpha-dsc';
      break;
      default : this.sortingCriteria = 'price-asc';
    }
    this.getProducts(this.sortingCriteria, this.category);
}
  selectCategory(num: number): void {
    switch (num) {
      case 0 : this.category = 'cameras';
        break;
      case 1 : this.category = 'consoles';
        break;
      case 2 : this.category = 'screens';
        break;
      case 3 : this.category = 'computers';
        break;
      case 4 : this.category = 'all';
        break;
      default : this.sortingCriteria = 'all';
    }
    this.getProducts(this.sortingCriteria, this.category);
  }
  ngOnInit() {
    this.sortingCriteria = 'price-asc';
    this.category = 'all'
    this.getProducts(this.sortingCriteria, this.category);
  }
}

