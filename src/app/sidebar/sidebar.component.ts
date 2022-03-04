import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Genre } from '../types/genre';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  genres: Genre[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getGenres().subscribe({
      next: (genres) => {
        this.genres = genres;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
