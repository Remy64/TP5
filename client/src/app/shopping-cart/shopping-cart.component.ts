import { Component, OnInit, Pipe} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductsService } from '../products.service';
import { Product } from '../products.service';
import { Model } from '../model';

export class Item {
  id: number;
  quantity: number;
  produit: Product;
  constructor(id: number, quantity: number, produit: Product) {
    this.id = id;
    this.quantity = quantity;
    this.produit = produit;
  }
}



/**
 * Defines the component responsible to manage the shopping cart page.
 */
@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  // TODO: À compléter
  panier: Model[];
  items: Item[];
  total: number;


  constructor(public cartService: ShoppingCartService, public productService: ProductsService) {}

  getPanier(): void{
    this.cartService.getCart().then(items => this.panier = items);
    this.panier.forEach((item) => {
      this.productService.getProduct(item.productId).then(
        produit => {
          this.items.push(new Item(item.productId, item.quantity, produit));
          this.total += produit.price * item.quantity;
    });
  });
  }


  ngOnInit() {
    this.getPanier();
  }
}
