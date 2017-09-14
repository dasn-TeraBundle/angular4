import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  showMainMenu: boolean;

  constructor() { }

  ngOnInit(){
    this.showMainMenu = true;
  }

  show(){
    this.showMainMenu = true;
  }

  hide(){
    this.showMainMenu = false;
  }

  toggle(){
    this.showMainMenu = !this.showMainMenu;
  }
}
