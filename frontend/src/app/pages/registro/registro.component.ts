import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  user_type: String | undefined;

  constructor() {
    this.user_type = 'cliente';
  }

  setUserType(type: string) {
    this.user_type = type;
  }
}
