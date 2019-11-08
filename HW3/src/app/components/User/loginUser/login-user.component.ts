import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

export class loginComponent {
  LoginClick: boolean;

  loginButton() {
    this.LoginClick = !this.LoginClick;
    this.RegisterClick = false;
    this.CreateHouse = false
  }
}
