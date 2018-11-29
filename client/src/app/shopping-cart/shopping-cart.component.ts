import { Component, OnInit, Pipe} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ProductsService } from '../products.service'

export class Item{
  id: number;
  quantity: number;
  produit: Product;
  constructor(id:number,quantity:number,produit:Product){
    this.id=id;
    this.quantity=quantity;
    this.produit=produit;
  }
}

const MODEL = [
  "productId",
  "quantity"
];

/**
 * Defines the component responsible to manage the shopping cart page.
 */
@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  // TODO: À compléter
  panier: MODEL[];
  items: Item[];
  total: number;

  ngOnInit(){
    this.getPanier();
  }

  constructor(public cartService: ShoppingCartService, public productService: ProductsService){}

  getPanier(): void{
    this.cartService.getCart().then(items => this.panier=items);
    for (var item in this.panier){
      this.productService.getProduct(item.productId).then(
        produit => items.push(new Item(item.productId,item.quantity,produit)),
        total+=produit.price*item.quantity);
    }
    })
  }
}
