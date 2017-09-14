import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';

import { UserService } from "./_services/user.service";
import {MenuService} from "./_services/menu.service";
import { LoginComponent } from './login/login.component';

import {AuthGuard} from "./_guards/auth.guard";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ProjectmanagementComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path : "",
        component : MenuComponent,
        canActivate: [AuthGuard],
        children: [
          { path: "project", component: ProjectmanagementComponent }
        ]
      },
      {
        path: "login",
        component: LoginComponent
      },
    ])
  ],
  providers: [AuthGuard, UserService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
