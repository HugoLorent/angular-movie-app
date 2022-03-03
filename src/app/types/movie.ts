import { Genre } from './genre';
import { Language } from './language';

export class Movie {
  id: number;
  title: string;
  poster_path: string;
  tagline: string;
  vote_average: string;
  runtime: number;
  release_date: string;
  spoken_languages: Language[];
  genres: Genre[];
}
