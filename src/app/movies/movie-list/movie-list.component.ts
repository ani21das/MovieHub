import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
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
}