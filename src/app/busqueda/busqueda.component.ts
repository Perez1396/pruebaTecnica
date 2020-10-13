import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movies } from '../model/movies';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  genre: string;
  genreF: FormGroup;
  movies: Movies[];
  movi: Movies;

  constructor(private peliculasService: PeliculasService,
      private fb: FormBuilder,) { }

  ngOnInit() {
    this.genreF = this.fb.group({
      genre: ['', [Validators.required] ],
    });
  }

  onSubmit(){
    console.log(this.genreF.value.genre);
    this.peliculasService.getMovies(this.genreF.value.genre).subscribe(
      success => {this.movies = success,
      console.log(this.movies);}
    )

  }

  handleClick(id:string){
    this.peliculasService.getMovieDetail(id).subscribe(
      movi => {this.movi = movi,
        console.log(this.movi) }
    );
    
  }

}
