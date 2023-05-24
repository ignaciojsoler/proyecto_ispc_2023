import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-card-prestador',
  templateUrl: './card-prestador.component.html',
  styleUrls: ['./card-prestador.component.css']
})
export class CardPrestadorComponent implements OnInit {
  mostrarDatosCards: boolean=true;
  trabajadores: any;

  constructor (private profesional: ProfesionalService) {
    this.profesional.obtenerDatosProfesionales().subscribe({
      next: (trabajadoresData) => {
        this.trabajadores=trabajadoresData
      },
      error: (errorData) => {
        console.error(errorData);
      }
    });
  }
  
  ngOnInit(): void {
  }
 
}
