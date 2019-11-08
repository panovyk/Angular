import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})

export class SearchComponent {
  inputedVaule: string | number;
  Value: string | number;

  onInput(ev) {
    this.inputedVaule = ev.target.value;
  }

  onClick() {
    this.Value = this.inputedVaule;
  }
}
