import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input() product: ICartProduct = {} as ICartProduct;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  constructor() {}

  incrementProductInCart() {
    this.increment.emit();
  }

  decrementProductInCart() {
    this.decrement.emit();
  }
}
