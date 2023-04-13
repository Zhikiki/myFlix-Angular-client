# MyFlix Angular Client App
The client-side for an application called myFlix based on its existing server-side code (REST API and database), with supporting documentation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

### Deployed app link

https://zhikiki.github.io/myFlix-Angular-client/movies

## User Stories

As a user, I want to:
* Receive information on movies, directors, and genres to learn more about movies I’ve watched or am interested in.
* Create a profile so I can save my favorite movies.
* Update or delete my profile information.

Based on detailed user stories were created:
* [=> User Flow (look to images section)](#images).
* [=> Kanaban task desk](https://trello.com/b/2TeZbRmh/angular-app-myflix).

## Key Features

* App displays a welcome view where users can either log in or register an account.
* Once authenticated, the user sees the main "all-movies" view, filter buttons and a personalized navbar.
* Navbar allows access to profile area view and logout options via a dropdown menu.
* User can filter movies by favorites.
* The individual movie cards container additional features:
    * A button that opens a dialog,​ where details about the director of that particular movie will be displayed.
    * A button that opens a dialog,​ where details about that particular genre of the movie will be displayed.
    * A button that opens a dialog,​ where details about plot synopsis of the movie will be displayed.
    * A button that allows user add/delete movie to/from favorite list.
* App is fully responsive for use on laptop, tablet or mobile.


## Tech Specs

* Angular ^15.0.0
* Angular Material ^15.0.0
* Node.js/ npm ^16.18.0
* TypeDoc ^0.23.22
* Github Pages

## Images

### User Flow 
![Welcome to LisFilx](/images/myFlix-user-flow.png)

<!-- ![Welcome to LisFilx](/img/Welcome.png)

![Login to get started](/img/Login.png)

![Main page with navbar, filter buttons and movies](/img/Movies.jpg) -->

