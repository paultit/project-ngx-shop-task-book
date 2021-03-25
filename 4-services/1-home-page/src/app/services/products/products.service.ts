import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../../shared/mocks/4-services/products';
import { pluck } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<{data: IProduct[]}>(
        'api/products/suggestion')
        .pipe(pluck('data'));
  }
}
