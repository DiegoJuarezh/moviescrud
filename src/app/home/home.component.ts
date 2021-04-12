import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {
    this.getMovies();
  }
  
  getMovies(){
    this.movieService.get().subscribe( (data: any) => {// En lugar de 'any' era 'Movies[]'
      this.movies = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }
  ngOnInit(): void {
  }

  delete(id:any){
    if( confirm('Seguro que deseas eliminar esta pelicula?')){
      this.movieService.delete(id).subscribe( (data) => {
        alert("Eliminado con éxito");
        this.getMovies();
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      });
    }
  }
}
