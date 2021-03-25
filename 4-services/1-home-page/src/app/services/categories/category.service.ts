import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../../shared/mocks/4-services/categories';
import { pluck } from 'rxjs/operators';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http
      .get<{data: ICategory[]}>('api/categories')
      .pipe(pluck('data'));

  }
}
