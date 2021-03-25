import { Component, Input } from '@angular/core';
@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent implements OnInit {
  @Input() public products = null;
  @Input() public categories = null;
  constructor() {}

  redirectTo(val) {}
  goToBasket() {}
  goToProduct() {}
}
