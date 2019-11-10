import {Component, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']

})

export class createHouseComponent {
  RegisterClick: boolean;

  create_house() {
    this.CreateHouse = !this.CreateHouse;
    this.LoginClick = false;
    this.RegisterClick = false
  }
}
