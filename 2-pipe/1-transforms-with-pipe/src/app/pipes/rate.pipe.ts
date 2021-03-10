import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const remainder = value % 1;
    if (remainder < 0.25) {
      return Math.trunc(value);
    } else if (remainder >= 0.25 && remainder < 0.75) {
      return Math.trunc(value) + 0.5;
    } else {
      return Math.round(value);
    }
    return value;
  }
}
