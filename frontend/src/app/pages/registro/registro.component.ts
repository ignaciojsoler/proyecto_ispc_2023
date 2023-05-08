import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  user_type: String | undefined;

  constructor(private router: Router) {
    this.user_type = 'cliente';
  }

  setUserType(type: string) {
    this.user_type = type;
  }

  handleSubmit() {
    this.router.navigate(this.user_type === 'cliente' ? ['/login'] : ['/pagos'])
     
  }
}
