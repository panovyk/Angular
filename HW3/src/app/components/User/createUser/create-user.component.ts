import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

export class registerComponent {
  RegisterClick: boolean;

  registerButton() {
    this.RegisterClick = !this.RegisterClick;
    this.LoginClick = false;
    this.CreateHouse = false
  }
}
