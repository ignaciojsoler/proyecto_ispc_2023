import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profesionales: any;
  categorias: any;
  categoriaSeleccionada: any;

  constructor(private profesionalService: ProfesionalService) {}

  ngOnInit(): void {
    this.recuperarProfesionales();
    // this.filtrarTrabajadores();
  }

  recuperarProfesionales() {
    this.profesionalService.obtener().subscribe((resultado) => {
      console.log(resultado);
      this.profesionales = resultado;
    });
  }

  // Filtrado de Categorías:
  // filtrarTrabajadores() {
  //   this.profesionalService.obtener().subscribe((resultado) => {
  //     if(this.categoriaSeleccionada) {
  //       this.profesionales = this.profesionales.filter(profesional: any => profesional.profesion === this.categoriaSeleccionada);
  //     } else {
  //       // Mostrar todos los trabajadores: reiniciar la lista o volver a cargarlos 
  //       // Ejemplo: this.profesionales = this.servicioObtenerProfesionales.obtenerTodos();
  //     }
  //     this.profesionales = resultado;
  //   });
  // }
}
