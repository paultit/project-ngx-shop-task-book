import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  public isShow: boolean = false;
  @Input() product?: IProduct = null;
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  addToBasket() {
    this.addToCart.emit('товар был добавлен в кoрзину');
  }
  show() {
    this.isShow = !this.isShow;
  }
}
