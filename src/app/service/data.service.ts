import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  getPostsUsingUserId(userId:string): Observable<any>{
    let params1 = new HttpParams().set('userId',userId);
    return this.http.get("https://jsonplaceholder.typicode.com/posts",{params:params1})
  }

  getUserDetails(id:string):Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
  }

}
