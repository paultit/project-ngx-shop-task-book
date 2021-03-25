import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-one-product-page',
  templateUrl: './one-product-page.component.html',
})
export class ProductComponent {
  @Input() product = null;

  goToBasket() {}
}
