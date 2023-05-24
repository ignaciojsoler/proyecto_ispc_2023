import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfesionalService {
  constructor(private http: HttpClient) {}
  obtener() {
    return this.http.get('http://localhost:3000/trabajadores');
  }
}
