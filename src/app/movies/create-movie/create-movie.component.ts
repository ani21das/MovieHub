// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MovieService } from '../movie.service';

// @Component({
//   selector: 'app-create-movie',
//   templateUrl: './create-movie.component.html',
//   styleUrls: ['./create-movie.component.css']
// })
// export class CreateMovieComponent implements OnInit {
// onFileSelected($event: Event) {
// throw new Error('Method not implemented.');
// }
//   movieForm!: FormGroup; // Marking movieForm as definitely assigned

//   loading: boolean = false;

//   constructor(private formBuilder: FormBuilder, private movieService: MovieService) { }

//   ngOnInit(): void {
//     this.movieForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       releaseYear: ['', Validators.required],
//       rating: ['', Validators.required],
//       genre: ['', Validators.required],
//       country: ['', Validators.required],
//       language: ['', Validators.required],
//       photoUrl: ['']
//     });
//   }

//   onSubmit() {
//     if (this.movieForm.invalid) {
//       return;
//     }
//     this.loading = true;
//     const formData = new FormData();
//     formData.append('name', this.movieForm.value.name);
//     formData.append('releaseYear', this.movieForm.value.releaseYear);
//     formData.append('rating', this.movieForm.value.rating);
//     formData.append('genre', this.movieForm.value.genre);
//     formData.append('country', this.movieForm.value.country);
//     formData.append('language', this.movieForm.value.language);
//     formData.append('photoUrl', this.movieForm.value.photoUrl);
    
//     this.movieService.createMovie(formData).subscribe(
//       (createdMovie) => {
//         console.log('Movie created successfully:', createdMovie);
//         // Optionally, you can navigate to a different page or perform any other action upon successful creation
//         this.loading = false;
//         this.movieForm.reset();
//       },
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movieForm!: FormGroup; // Marking movieForm as definitely assigned
  selectedFile: any; // Declare selectedFile property
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      name: ['', Validators.required],
      releaseYear: ['', Validators.required],
      rating: ['', Validators.required],
      genre: ['', Validators.required],
      country: ['', Validators.required],
      language: ['', Validators.required],
      photoUrl: ['']
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.movieForm.invalid) {
      return;
    }
    this.loading = true;
    const formData = new FormData();
    formData.append('name', this.movieForm.value.name);
    formData.append('releaseYear', this.movieForm.value.releaseYear);
    formData.append('rating', this.movieForm.value.rating);
    formData.append('genre', this.movieForm.value.genre);
    formData.append('country', this.movieForm.value.country);
    formData.append('language', this.movieForm.value.language);
    formData.append('photoUrl', this.selectedFile); // Use selectedFile instead of movieForm.value.photoUrl
    
    this.movieService.createMovie(formData).subscribe(
      (createdMovie) => {
        console.log('Movie created successfully:', createdMovie);
        // Optionally, you can navigate to a different page or perform any other action upon successful creation
        this.loading = false;
        this.movieForm.reset();
        this.selectedFile = null; // Reset selectedFile after submission
      },
    );
  }
}
