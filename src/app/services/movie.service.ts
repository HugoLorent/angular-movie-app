import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../types/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  serverUrl = 'https://movie-api.benoithubert.me';
  moviesPath = '/movies';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrl}${this.moviesPath}`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.serverUrl}${this.moviesPath}/${id}`);
  }
}
