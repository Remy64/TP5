import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService} from '../products.service';
import { Product} from '../products.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Model } from '../model';

/**
 * Defines the component responsible to manage the product page.
 */
@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  product: Product;
  model: Model;
  panier: Model[];
  quantity: number;
  showDialog: boolean;
  /**
   * Initializes a new instance of the ProductComponent class.
   *
   * @param route                   The active route.
   */
  constructor(private route: ActivatedRoute, private productService: ProductsService, private cartService: ShoppingCartService) { }

  getProduct(id: number): void {

    this.productService.getProduct(id).then(product => this.product = product);

  }

  /**
   * Occurs when the component is initialized.
   */
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.getProduct(parseInt(productId));
    // TODO: Compléter la logique pour afficher le produit associé à l'identifiant spécifié (productId).
  }

  Ajouter() {
    //this.model.quantity = this.quantity;
    //this.model.productId = this.product.id;
    //console.log(this.model);
    this.cartService.getCart().then(panier => this.panier = panier);
    if(this.panier != undefined){
      if (this.panier.find( item => item.productId === this.product.id)) {
        this.cartService.updateItem(this.product.id,this.quantity).then(() => {this.showDialog=true;this.cartService.addItems(this.quantity)});
      } else {
        this.cartService.postItem(this.product.id,this.quantity).then(() => {this.showDialog=true;this.cartService.addItems(this.quantity)});
      }
    }else{
      this.cartService.postItem(this.product.id,this.quantity).then(() => {this.showDialog=true;this.cartService.addItems(this.quantity)});
    }
    this.showDialog=true;
    setTimeout(() => {
      this.showDialog = false;
    }, 5000);
  }

}
