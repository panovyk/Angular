import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']

})

export class loginComponent {
  LoginClick: boolean;

  loginButton() {
    this.LoginClick = !this.LoginClick;
    this.RegisterClick = false;
    this.CreateHouse = false
  }
}
