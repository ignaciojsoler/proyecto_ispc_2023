import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profecionales: any;
  constructor(private profecionalesServices: ProfesionalService) {}
  ngOnInit(): void {
    this.recuperarProfecionales();
  }
  recuperarProfecionales() {
    this.profecionalesServices
      .obtener()
      .subscribe((resultado) => (this.profecionales = resultado));
  }
}
