import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from './config';


export class Model {
  id: number;
  quantity: number
}

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

  getCart(): Promise<Model[]>{
  	const url = `${Config.apiUrl}/shopping-cart`
  	return this.http.get(url).toPromise().then(items => items as Model[]).catch(ShoppingCartService.handleError);
  }
}
