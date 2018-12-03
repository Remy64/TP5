import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Config } from './config';
import { Model} from "./model";
import {Product} from "./products.service";



/**
 * Defines the service responsible to retrieve the products in the shopping cart.
 */
@Injectable()

export class ShoppingCartService {



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



  getCart(): Promise<Model[]> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.get(url, options).toPromise().then(items => items as Model[]).catch(ShoppingCartService.handleError);
  }
  postItem(model: Model): Promise<Model> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.post(url, JSON.stringify(model), options).toPromise().then().catch(ShoppingCartService.handleError);
  }
  updateItem(model: Model): Promise<Model> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.put(url, JSON.stringify(model), options).toPromise().then().catch(ShoppingCartService.handleError);
  }
  deleteCart(): Promise<{}> {
    const url = `${Config.apiUrl}/shopping-cart`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers, withCredentials: true};
    return this.http.delete(url, options).toPromise().then().catch(ShoppingCartService.handleError);
  }
}
