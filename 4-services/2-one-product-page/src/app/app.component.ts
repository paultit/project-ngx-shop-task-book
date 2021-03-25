import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../shared/mocks/4-services/products';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'Компонент страницы продукта';
  public product$: Observable<IProduct> = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productsService.getProductById(
      '156-displej-dla-noutbukov-s-ekranom-n156bge-l31'
    );
  }
}
