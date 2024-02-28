import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    MovieListComponent,
    CreateMovieComponent,
    DeleteMovieComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    MovieService
  ]
})
export class MoviesModule { }
