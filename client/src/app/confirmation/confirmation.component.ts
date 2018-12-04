import { Component, OnInit } from '@angular/core';
import { OrderService} from "../order.service";

/**
* Defines the component responsible to manage the confirmation page.
*/
@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements  OnInit {
  // TODO: À compléter
  numero: number;
  nom: string;
  prenom: string

  constructor(private order: OrderService) { }
  getOrder(): void {

    this.order.getOrders().then(order => {this.numero = order.length;
    this.nom = order[order.length - 1].lastname;
    this.prenom = order[order.length - 1].firstname });

  }

ngOnInit() {

  this.getOrder();
}


}
