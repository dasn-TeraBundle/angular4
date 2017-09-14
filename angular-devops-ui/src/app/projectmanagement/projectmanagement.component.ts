import { Component, OnInit } from '@angular/core';
import {MenuService} from "../_services/menu.service";

@Component({
  selector: 'app-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.css']
})
export class ProjectmanagementComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    //this.menuService.hide();
    console.log("PM : " + this.menuService.showMainMenu)
  }

}
