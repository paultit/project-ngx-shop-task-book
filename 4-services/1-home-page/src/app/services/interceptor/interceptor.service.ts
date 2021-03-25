import { Injectable, Inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from './config';

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string) {}
  intercept<T extends IRes<T>>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    req = req.clone({
      headers: req.headers.append('Content-Type', 'application/json'),
      url: `${this.baseUrl}${req.url}`,
    });
    return next.handle(req);
  }
}
