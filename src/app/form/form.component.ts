import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movie: Movie = {
    name: "",
    description: "",
    genre: "",
    year: 0,
    duration: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveMovie(){
    console.log(this.movie);
  }

}
