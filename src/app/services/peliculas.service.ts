import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {  Movies } from 'src/app/model/movies'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }


  getMovies(genre: string): Observable<Movies[]> {
    return this.http.get<Movies[]>('http://api.tvmaze.com/search/shows?q=' + genre);
  }

  getMovieDetail(id: string): Observable<Movies> {
    return this.http.get<Movies>('http://api.tvmaze.com/shows/'+id);
  }
}
