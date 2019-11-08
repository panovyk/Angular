import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

export class createHouseComponent {
  RegisterClick: boolean;

  create_house() {
    this.CreateHouse = !this.CreateHouse;
    this.LoginClick = false;
    this.RegisterClick = false
  }
}
