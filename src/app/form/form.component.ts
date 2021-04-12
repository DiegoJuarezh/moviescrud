import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';

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

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
  }

  saveMovie(){
    this.moviesService.save(this.movie).subscribe( (data) => {
      alert('Pelicula Guardada');
      console.log(data);
    }, (error) => {
      alert('Occurrio un error');
      console.log(error);
    } )
  }

}
