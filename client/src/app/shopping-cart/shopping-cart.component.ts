import { Component, OnInit} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service'

class MODEL {
  id:number;
  quantity: number
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
  panier: MODEL[];

  ngOnInit(){
    this.getPanier();
  }

  constructor(public cartService: ShoppingCartService){}

  getPanier(): void{
    this.cartService.getCart().then(items => this.panier=items);
  }
}
