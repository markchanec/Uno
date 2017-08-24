import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cards } from '../services/cards';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cart: Cards[] = [];

  @Output()
  onReDeal: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log('cart = ', this.cart);
  }

  reDeal(): void {
    console.log('deleting item...');
    this.onReDeal.emit();
  }

}
