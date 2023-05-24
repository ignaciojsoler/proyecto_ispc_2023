import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prestador',
  templateUrl: './card-prestador.component.html',
  styleUrls: ['./card-prestador.component.css']
})
export class CardPrestadorComponent {
  @Input() imagen: string = '';
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() descripcion: string = '';
  @Input() profesion: string[] = [''];
  @Input() ranking: string = '';
}
