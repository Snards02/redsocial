import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:3000/posts'; 
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  postCreate(post: Post): Observable<any> {
    let res = this.http.post(`${this.baseUrl}/create`,post,cabecera);
    console.log(res);
    return res    
  }

  getPostByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  putPostById( post: Post): Observable<any> {
    return this.http.put(`${this.baseUrl}/${post.id}`,post,cabecera);
  }
  deletePostById(postId:string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${postId}`,cabecera);
  }
}
