import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users'; 
  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  putUserById(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/${user.id}`,user,cabecera);
  }

  postLogin(email: string, password:string): Observable<any> {
    let res = this.http.post(`${this.baseUrl}/login`,{ email, password },cabecera);
    console.log(res)
    return res
  }

  postRegister(user: User): Observable<any> {
    let res = this.http.post(`${this.baseUrl}/register`,user,cabecera);
    console.log(res);
    return res    
  }

  
}
