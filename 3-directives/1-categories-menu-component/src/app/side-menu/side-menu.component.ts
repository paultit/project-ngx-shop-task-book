import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  public currentName: string = null;
  @Input() categories = [];
  @Output() categoryChange = new EventEmitter();

  constructor() {}

  hover(subCategory) {
    this.currentName = subCategory;
  }
  mouseLeave() {
    this.currentName = null;
  }
  redirectTo(subCategory) {
    this.categoryChange.emit(subCategory);
  }
}
