import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Config } from './config';
import { Model} from './model';
import {Product} from './products.service';



/**
 * Defines the service responsible to retrieve the products in the shopping cart.
 */
@Injectable()

export class ShoppingCartService {
  nItemsTocart = 0;

  @Output() itemsChange: EventEmitter<number> = new EventEmitter();

  /**
   * Handles the current error.
   *
   * @param error                   The error to handle.
   * @return {Promise<object>}      A promise object.
   */
  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.feedbackMessage || error);
  }

  /**
   * Initializes a new instance of the ShoppingCartService class.
   *
   * @param http                    The HTTP service to use.
   */
  constructor(private http: HttpClient) {}

  addItems(quantity: number) {
      this.nItemsTocart = this.nItemsTocart + quantity;
      this.itemsChange.emit(this.nItemsTocart);
  }

  setItems(quantity: number) {
    this.nItemsTocart = quantity;
    this.itemsChange.emit(this.nItemsTocart);
  }

  getCart(): Promise<Model[]> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.get(url, options).toPromise().then(items => items as Model[]).catch(ShoppingCartService.handleError);
  }
  postItem(productId: number, quantity: any): Promise<Model> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
<<<<<<< HEAD
    return this.http.post(url, [{'productId': productId, 'quantity': parseInt(quantity),}], options).toPromise().then().catch(ShoppingCartService.handleError);
=======
    return this.http.post(url, {'productId': productId, 'quantity': parseInt(quantity)}, options).toPromise().then().catch(ShoppingCartService.handleError);
>>>>>>> 34ff654cc82b46d9b8cb71dda64261215464e095
  }
  updateItem(productId: number, quantity: number): Promise<Model> {
    const url = `${Config.apiUrl}/shopping-cart/` + productId;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.put(url, {quantity: quantity,}, options).toPromise().then().catch(ShoppingCartService.handleError);
  }
  deleteCart(): Promise<{}> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    this.nItemsTocart = 0;
    return this.http.delete(url, options).toPromise().then().catch(ShoppingCartService.handleError);
  }
  remove(id: any): Promise<{}>{
    const url = `${Config.apiUrl}/shopping-cart/` + id;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.delete(url,options).toPromise().then().catch(ShoppingCartService.handleError);
  }
}
