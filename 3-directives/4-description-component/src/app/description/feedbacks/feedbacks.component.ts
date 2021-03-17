import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IFeedback } from '../../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {
  @Input() feedbacks: IFeedback[] = [];
  @Output() addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

  addNewFeedback(): void {
    this.addFeedbackEvent.emit('отзыв добавлен');
  }
}
