import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any>  {
    return this.http.get(`${this.baseUrl}/livros`);
  }
}
