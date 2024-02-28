import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://localhost:7057/api/movies'
  
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.apiUrl}/all`)
  }
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
  createMovie(movieData: FormData): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}`, movieData);
  }
  deleteMovie(movieId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${movieId}`);
  }
  
  updateMovie(movieId: number, movieData: FormData): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${movieId}`, movieData);
  }
}
