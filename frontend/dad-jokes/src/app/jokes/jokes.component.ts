import { Component, OnInit } from '@angular/core';
import { JokesService } from "./jokes.service"

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  jokes
  constructor(private jokesService:JokesService) { }

  ngOnInit(): void {
    this.getJokes()
  }
 
  getJokes(){
    this.jokesService.getAll()
  }
}
