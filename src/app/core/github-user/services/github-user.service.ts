import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  private baseUrl:string = "https://api.github.com/users"
  constructor(private http: HttpClient) { }


  fetchUser(name:string): Observable<User>{
    
    return this.http.get<User>(`${this.baseUrl}/${name}`)
  }
}
