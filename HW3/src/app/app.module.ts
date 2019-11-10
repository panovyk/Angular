import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CurrencyValuePipe } from './pipes/currency-value.pipe';
import {SearchComponent} from "./components/search/search.component";

//TODO
// import { LoginDirective } from './directives/login.directive';
// import { RegistrationDirective } from './directives/registration.directive';
// import { HouseDirective } from './directives/house.directive';
// import { SearchDirective } from './directives/search.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CurrencyValuePipe,
    // CurrencyValuePipe,
    // LoginDirective,
    // RegistrationDirective,
    // HouseDirective,
    // SearchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
