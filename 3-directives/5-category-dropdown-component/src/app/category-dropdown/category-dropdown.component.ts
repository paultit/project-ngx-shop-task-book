import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  public currentIndex = null;
  public currentCategory = '';
  @Output() subCategorySelectEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() categories: ICategory[] = [];

  showSubCategories(subCategoryIdx: number): void {
    this.currentIndex = subCategoryIdx;
  }

  subCategorySelect(subCategoryName: string): void {
    this.subCategorySelectEvent.emit(subCategoryName);
  }
}
