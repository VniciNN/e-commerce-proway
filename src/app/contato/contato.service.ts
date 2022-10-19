import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllInformations(): Observable<any> { 
    return this.http.get(`${this.baseUrl}/contato`)
  }

  postNewsInformations(info: any): Observable<any> { 
    return this.http.post(`${this.baseUrl}/contato`, info)
  }
}
