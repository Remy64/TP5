import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

/**
 * Defines the main component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  public count: number;

  // TODO: Modifier le nom des auteurs pour vos noms
  readonly authors = [
    'Antoine Pelletier',
    'Rémy Bigué'
  ];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.count = 0;
    this.shoppingCartService.itemsChange.subscribe(number => {
      this.count = number;
    });
  }
  // TODO: À compléter
ngOnInit() {
  this.getCart();
}

getCart() {
  this.shoppingCartService.getCart().then((shoppingCart) => {
      shoppingCart.forEach((cartItem) => {
        this.count += cartItem.quantity;
      })
  });
}
}
