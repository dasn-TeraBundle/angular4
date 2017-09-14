import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {MenuService} from "../_services/menu.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private fb: FormBuilder, private userService: UserService,
              private menuService: MenuService) {
    this.form = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {
    this.submitted = false;
  }

  onLogin(value){
    this.submitted = true;

    if(this.form.valid) {
      let username = value.username;
      let password = value.password;

      this.userService.login(username, password)
        .then(res => {
          /*this.loggedIn = res;
           this.menuService.showMainMenu = res.valueOf();*/
          if (res) {
            sessionStorage.setItem('loggedIn', "1");
            this.router.navigate([this.returnUrl]);
          }
        });
    }
  }
}
