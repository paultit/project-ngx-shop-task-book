import { Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  counter = 5;
  @Output() goToBasket = new EventEmitter();
  constructor() {}

  redirectTo() {
    this.goToBasket.emit();
  }
}
