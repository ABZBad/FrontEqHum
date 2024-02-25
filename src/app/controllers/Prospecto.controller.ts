import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prospecto } from '../models/Prospecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProspectoController {
  private apiUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  getAllProspectos(): Observable<Prospecto[]> {
    console.log(this.http.get<Prospecto[]>(this.apiUrl));
    return this.http.get<Prospecto[]>(this.apiUrl);
  }

  getProspectoById(id: number): Observable<Prospecto> {
    return this.http.get<Prospecto>(`${this.apiUrl}/${id}`);
  }

  createProspecto(prospecto: Prospecto): Observable<Prospecto> {
    return this.http.post<Prospecto>(this.apiUrl, prospecto);
  }

  updateProspecto(prospecto: Prospecto): Observable<Prospecto> {
    return this.http.put<Prospecto>(`${this.apiUrl}/${prospecto.id}`, prospecto);
  }

  deleteProspecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}