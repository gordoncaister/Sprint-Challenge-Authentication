import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JokesService {
  BASE_URL = "http://localhost:3300/api/jokes/"
  constructor(private http:HttpClient) { }
  
  getAll(){
    console.log("getting Jokes")
    const headers = new HttpHeaders().set("authorization",localStorage.getItem("authorization"))
    console.log(headers)
    return this.http.get(this.BASE_URL,{headers})
  }
}
