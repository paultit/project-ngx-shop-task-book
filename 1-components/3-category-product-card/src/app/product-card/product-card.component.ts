import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';
@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
  @Input() product: IProduct = {} as IProduct;
  @Output() addToCart = new EventEmitter();
  @Output() goToProduct = new EventEmitter();

  addToBasket() {
    this.addToCart.emit();
  }

  redirectTo() {
    this.goToProduct.emit();
  }
}
