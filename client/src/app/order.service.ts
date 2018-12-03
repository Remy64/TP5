import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from './config';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.feedbackMessage || error);
  }

  constructor(private http: HttpClient) { }
  getOrders(): Promise<Order[]> {
    const url = `${Config.apiUrl}/orders`;
    return this.http.get(url).toPromise().then(orders => orders as Order[]).catch(OrderService.handleError);
  }

  postOrder(order: Order): Promise<Order> {
    const url = `${Config.apiUrl}/orders`;
    return this.http.post(url, JSON.stringify(order)).toPromise().then().catch(OrderService.handleError);
  }
}
