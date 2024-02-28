import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { DeleteMovieComponent } from './movies/delete-movie/delete-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },

  { path: 'movies', component: MovieListComponent },
  { path: 'create-movie', component: CreateMovieComponent },
  { path: 'delete-movie', component: DeleteMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
