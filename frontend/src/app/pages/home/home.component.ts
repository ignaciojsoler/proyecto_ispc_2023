import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profesionales: any;

  constructor(private profesionalService: ProfesionalService) {}

  ngOnInit(): void {
    this.recuperarProfesionales();
  }

  recuperarProfesionales() {
    this.profesionalService.obtener().subscribe((resultado) => {
      console.log(resultado);
      this.profesionales = resultado;
    });
  }
}
