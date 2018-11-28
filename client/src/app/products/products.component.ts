import { Component } from '@angular/core';
import { Product} from '../products.service';
import { ProductsService } from "../products.service";

/**
 * Defines the component responsible to manage the display of the products page.
 */
@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  // TODO: À compléter
  constructor(private productService: ProductsService) { }
  products: Product[];

  
}
