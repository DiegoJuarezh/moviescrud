import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {HttpClient} from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService, private httpClient: HttpClient) {
    this.movieService.get().subscribe( (data: any) => {// En lugar de 'any' era 'Movies[]'
      this.movies = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  ngOnInit(): void {
  }

}
