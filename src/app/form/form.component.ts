import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // foundFilms: Film[] = [];
  movie: Movie = {
    name: "",
    description: "",
    genre: "",
    year: 0,
    duration: ""
  };
  
  id: any;
  editing: boolean = false;
  movies: Movie[] = [];
  movie_TMP:any;

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);
    if( this.id ){
      this.editing = true;
      this.moviesService.get().subscribe( (data:any) => { //data:Movie[]
        this.movies = data;
        this.movie_TMP = this.movies.find( (m) => { return m.id == this.id });
        this.movie = this.movie_TMP;

        // this.movie = this.movies.find( (m) => { return m.id == this.id });
        console.log(this.movie);
      }, (error) => {
        console.log(error);
      })
    }else{
      this.editing = true;
    }
  }

  ngOnInit(): void {
  }

  saveMovie(){
    if( this.editing ){
      this.moviesService.put(this.movie).subscribe( (data) => {
        alert('Pelicula Actualizada');
        console.log(data);
      }, (error) => {
        alert('Occurrio un error');
        console.log(error);
      } )
    }else{
      this.moviesService.save(this.movie).subscribe( (data) => {
        alert('Pelicula Guardada');
        console.log(data);
      }, (error) => {
        alert('Occurrio un error');
        console.log(error);
      } )
    }
  }

}
