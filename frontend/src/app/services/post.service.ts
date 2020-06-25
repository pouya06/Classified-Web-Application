import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../entity/Post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private base_url = "http://localhost:8000/api/posts"

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.base_url);
  }

  getPostById(id : number): Observable<Post> {
    const url = `${this.base_url}/${id}`;
    return this.http.get<Post>(url);
  }
}
