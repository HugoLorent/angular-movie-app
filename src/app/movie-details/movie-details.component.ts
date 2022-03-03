import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Genre } from '../types/genre';
import { Movie } from '../types/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  genres: Genre[];

  constructor(
    private movieServie: MovieService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieServie.getMovie(id).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.genres = this.movie.genres;
        console.log(movie);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
