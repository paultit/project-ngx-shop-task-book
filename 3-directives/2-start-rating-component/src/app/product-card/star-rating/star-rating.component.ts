import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-star-rating',
  templateUrl: './star-rating.component.html',
})
export class StarRatingComponent {
  @Input() feedbackRate = 0;
  public stars: Array<number> = [0, 1, 2, 3, 4];
  constructor() {}

  highlight(idx) {
    return idx < Math.round(this.feedbackRate);
  }
}
