// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = 'http://localhost:8080/'; // Replace with your actual API

  constructor(private http: HttpClient) {}
   
  registerUser(userData:any): Observable<any[]> {
    return this.http.post<any>(this.apiUrl+`save-user`,userData);
  }

  loginUser(model: { email: string; password: string; }) {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return this.http.post<any>(this.apiUrl+`auth/login`,model,{ headers });
  }
}
