import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';
@Component({
  selector: 'ngx-shop-product-description',
  templateUrl: './description.component.html',
})
export class DescriptionComponent {
  public isShowDescription = true;
  @Input() product = null;
  @Output() addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

  toggleTab() {
    this.isShowDescription = !this.isShowDescription;
  }
  addFeedback(value) {
    this.addFeedbackEvent.emit(value);
  }
}
