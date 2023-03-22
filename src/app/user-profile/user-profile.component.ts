import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  // we declare variable as an object of type any
  // this variable will keep user info from API call (look getUser())
  user: any = {};

  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      // we set user variable to keep what we get as a response from API call
      this.user = resp;
      console.log(resp);
      // console.log(this.user);
      return this.user;
    });
  }
}
