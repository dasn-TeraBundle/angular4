import { Component, OnInit } from '@angular/core';
import {MenuService} from "../_services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMainMenu: boolean;
  showMenuItem: number;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.menuService.show();
    this.showMainMenu = true;
    this.showMenuItem = -1;
  }

  showMenuDetailOnClick(id: number){
    this.showMainMenu = false;
    this.showMenuItem = id;
  }
  click(){
    console.log("Menu : " + this.menuService.showMainMenu);
    this.menuService.toggle();
  }
}
