import {Component} from '@angular/core';
import {isBoolean} from "util";
import {of} from "rxjs";
import {style} from "@angular/animations";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputedVaule: string | number;
  Value: string | number;
  LoginClick: boolean;
  RegisterClick: boolean;
  CreateHouse: boolean;
  all_inf: boolean;
  randomBlocked: boolean = Math.random() >= 0.5;
  house_index: number = -1;
  loginInfo: string;

  Users = [
    {
      id: 1,
      firstname: 'Roma',
      email: 'roma1@mail.ua',
      login: 'roma123',
      password: 'smksa',
      isblocked: this.randomBlocked
    },
    {
      id: 2,
      firstname: 'Vasya',
      email: 'vasya2@mail.ua',
      login: 'vasya123',
      password: '12qsqd',
      isblocked: this.randomBlocked
    },
    {
      id: 3,
      firstname: 'Ira',
      email: 'ira3@mail.ua',
      login: 'ira123',
      password: '12wqd213',
      isblocked: this.randomBlocked
    },
    {
      id: 4,
      firstname: 'Nadya',
      email: 'nadya4@mail.ua',
      login: 'nadya123',
      password: 'fef34',
      isblocked: this.randomBlocked
    },
    {
      id: 5,
      firstname: 'Artur',
      email: 'atrur5@mail.ua',
      login: 'artur123',
      password: '3h5et4',
      isblocked: this.randomBlocked
    },
  ];

  Houses = [
    {
      id: 1,
      city: 'Kyiv',
      street: 'Lvivska',
      rooms: 3,
      price: 300000,
      user: this.Users[0]
    },
    {
      id: 2,
      city: 'Lviv',
      street: 'Lychakivs\'ka',
      rooms: 2,
      price: 200000,
      user: this.Users[1]
    },
    {
      id: 3,
      city: 'Zolochiv',
      street: 'Striltsiv',
      rooms: 4,
      price: 20000,
      user: this.Users[2]
    },
    {
      id: 4,
      city: 'New-York',
      street: 'Banditos',
      rooms: 1,
      price: 20000000,
      user: this.Users[3]
    },
    {
      id: 5,
      city: 'Berlin',
      street: 'Gut',
      rooms: 2,
      price: 150000,
      user: this.Users[4]
    },
  ];

  House = {
    id: this.Houses.length + 1,
    city: '',
    street: '',
    rooms: 0,
    price: 0,
    user: this.Users[Math.floor(this.Users.length + 1)]
  };

  User = {
    id: this.Users.length + 1,
    firstname: '',
    email: '',
    login: '',
    password: '',
    isblocked: this.randomBlocked
  };

  UserLogin = {
    login: '',
    password: ''
  };

  onInput(ev) {
    this.inputedVaule = ev.target.value;
  }

  onClick() {
    this.Value = this.inputedVaule;
  }

  loginButton() {
    this.LoginClick = !this.LoginClick;
    this.RegisterClick = false;
    this.CreateHouse = false
  }

  registerButton() {
    this.RegisterClick = !this.RegisterClick;
    this.LoginClick = false;
    this.CreateHouse = false
  }

  create_house() {
    this.CreateHouse = !this.CreateHouse;
    this.LoginClick = false;
    this.RegisterClick = false
  }

  show_more(id: number) {
    this.house_index = id;
    this.all_inf = !this.all_inf
  }

  checkValidationRef(loginReference: NgForm) {
    console.log(loginReference.value);
  }

  loginUser() {
    const foundedUser = this.Users.find(
      User => this.UserLogin.login === User.login &&
    this.UserLogin.password === User.password);
    foundedUser ? this.loginInfo = 'Welcome' : this.loginInfo = 'User is not found'
  }

  addHouse(addHouseForm: NgForm) {
    this.Houses.push(this.House);
    console.log('new house created');
  }

  addUser(addUserForm: NgForm) {
    this.Users.push(this.User);
    console.log('new user created:', this.User.login);
  }
}
