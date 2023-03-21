import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  // we declare variable as an array of type any
  // this variable will keep movies from API call (look getMovies())
  movies: any[] = [];
  constructor(public fetchApiData: FetchApiDataService) {}

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
}
