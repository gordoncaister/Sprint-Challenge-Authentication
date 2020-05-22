import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = "http://localhost:3300/api/auth/"
  model = "login"
  constructor(private http: HttpClient) { }

  getUrl() { return `${this.BASE_URL}${this.model}`}

  post(userCredentials){
    return this.http.post(this.getUrl(),userCredentials)
  }

}
