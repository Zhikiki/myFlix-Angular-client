import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { GenreDetailsComponent } from '../genre-details/genre-details.component';
import { DirectorDetailsComponent } from '../director-details/director-details.component';
import { MovieSynopsisComponent } from '../movie-synopsis/movie-synopsis.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  // we declare variable as an array of type any
  // this variable will keep movies from API call (look getMovies())
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  // After implementing the function getMovies it is being called ngOnInit lifecycle hook
  // ngOnInit is called when Angular is done creating the component
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
    // We make API call to get full list of movies
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      // we set movies variable to keep what we get as a response from API call
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openGenreDetails(name: string, description: string): void {
    console.log(name);
    this.dialog.open(GenreDetailsComponent, {
      data: {
        Name: name,
        Description: description,
      },
      // panelClass: 'genre-dialog-background',
      // width: '400px',
    });
  }

  openDirectorDetails(name: string, bio: string, birth: string): void {
    console.log(name);
    this.dialog.open(DirectorDetailsComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth,
      },
    });
  }

  openMovieSynopsis(title: string, movieDirector: string, movieGenre: string, movieDescription: string, movieImagePath: string): void {
    this.dialog.open(MovieSynopsisComponent, {
      data: {
        Title: title,
        Director: movieDirector,
        Genre: movieGenre,
        Description: movieDescription,
        Image: movieImagePath
      },
    });
  }
}
