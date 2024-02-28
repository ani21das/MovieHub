import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  movies: Movie[] = [];
  loading: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getAllMovies().subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
        this.loading = false;
      }
    );
  }

  deleteMovie(id: number) {
    this.loading = true;
    this.movieService.deleteMovie(id).subscribe(
      () => {
        console.log('Movie deleted successfully');
        // After deletion, remove the movie from the local array
        this.movies = this.movies.filter(movie => movie.id !== id);
        this.loading = false;
      }
    );
  }
}
