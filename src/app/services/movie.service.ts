import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../types/movie';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../types/comment';
import { Genre } from '../types/genre';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  serverUrl = 'https://movie-api.benoithubert.me';
  moviesPath = '/movies';
  genrePath = '/genres';
  commentPath = '/comments';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrl}${this.moviesPath}`);
  }

  getMoviesByGenre(genreName: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.serverUrl}${this.moviesPath}`, {
      params: { genre: genreName },
    });
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.serverUrl}${this.genrePath}`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.serverUrl}${this.moviesPath}/${id}`);
  }

  postComment(comment: Comment, idMovie: number): Observable<Comment> {
    return this.http.post<Comment>(
      `${this.serverUrl}${this.moviesPath}/${idMovie}${this.commentPath}`,
      comment
    );
  }
}
