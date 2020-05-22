import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  token;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  

  login(){

    interface Response{
      message: string,
      token: string
    }

    this.loginService.post({username:this.username,password:this.password})
      .subscribe( (response: Response) => {
        response.token
        console.log(response.token)
        localStorage.setItem("authorization", response.token)

      })
      
    }
   
  

}
