import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../types/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let genre = this.route.snapshot.paramMap.get('genre');
    console.log(genre);
    if (genre !== null) {
      this.getMoviesByGenre(genre);
    } else {
      this.getAllMovies();
    }
  }

  private getAllMovies() {
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private getMoviesByGenre(genre: string) {
    this.movieService.getMoviesByGenre(genre).subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
