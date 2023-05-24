import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProfesionalService {
  url:String="http://localhostt:3000/";
  constructor (private http:HttpClient) {}

  obtenerDatosProfesionales(): Observable <any> {
    return this.http.get(this.url+ "trabajadores");
  }
}
