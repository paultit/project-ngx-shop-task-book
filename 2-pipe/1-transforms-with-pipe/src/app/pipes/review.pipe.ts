import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    if (countOfReviews === 0 || countOfReviews === undefined) {
      return 'Нет отзывов';
    }
    const str = countOfReviews.toString();
    const lastNum = str.charAt(str.length - 1);
    const lastTwoNumOfReviews = countOfReviews % 100;
    if (+lastNum === 1 && lastTwoNumOfReviews !== 11) {
      return `${countOfReviews} отзыв`;
    } else if (lastTwoNumOfReviews >= 11 && lastTwoNumOfReviews < 15 || +lastNum >= 5) {
      return `${countOfReviews} отзывов`;
    }
    return `${countOfReviews} отзыва`;
  }
}
