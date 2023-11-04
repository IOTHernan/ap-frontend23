import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url = "src/assets/data/data.json";

  // Headers para POST, PUT Y DELETE.
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' });
  constructor(private http:HttpClient) { }
  obtenerDatos(): Observable<any> {
    // console.log('El servicio portfolio está corriendo');
    return this.http.get("../../../assets/data/data.json");
  }
}
