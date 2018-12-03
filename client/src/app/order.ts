import {Model} from './model';

export class Order {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  products: Model[];
}
