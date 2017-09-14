import {Component} from "@angular/core";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

import {UserService} from "./_services/user.service";
import {User} from "./_models/user";
import {MenuService} from "./_services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: Boolean;


  constructor() {

  }

  ngOnInit() {
    this.loggedIn = false;
  }

}
