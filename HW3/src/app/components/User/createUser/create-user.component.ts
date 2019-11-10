import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']

})

export class registerComponent {
  RegisterClick: boolean;

  registerButton() {
    this.RegisterClick = !this.RegisterClick;
    this.LoginClick = false;
    this.CreateHouse = false
  }
}
