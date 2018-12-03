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

    constructor(public cartService: ShoppingCartService, public productService: ProductsService)
    {
      this.items=[];
      this.total=0;
    }

    getPanier(){
      this.cartService.getCart().then(panier => {
        panier.forEach((item) => {
          this.productService.getProduct(item.productId).then(
            produit => {
              this.items.push(new Item(item.productId, item.quantity, produit));
              this.total += produit.price * item.quantity;
            });
          })
        });
    }


    ngOnInit() {
      this.getPanier();
    }

    removeOne(id: number){
      if (confirm("Voulez-vous supprimer le produit du panier?")) {
        this.cartService.remove(id).then(() => {
         var newItems = [];
         var newTotal=0;
         this.items.map((item) => {
           if (item.id != id) {
             newItems.push(item);
             newTotal+=item.quantity;
           }
         });
         this.items = newItems;
         this.total = newTotal;
       });
     }
    }

    removeAll(){
      if (confirm("Voulez-vous supprimer tous les produits du panier?")) {
        this.cartService.deleteCart().then(() => {
          this.items = [];
          this.total=0;
        });
      }

    }

    moins(id:number){

    }

    plus(id:number){

    }

    getTotal(){
      return this.total;
    }
}
