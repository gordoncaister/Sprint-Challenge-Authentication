import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = "http://localhost:3300/api/auth/"
  constructor() { }
}
