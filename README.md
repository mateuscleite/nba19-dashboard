# Nba19Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Tech Stack

To run this project it is required to have installed in your computer:

- [Node.js](https://nodejs.org)
- [Angular](https://angular.io/)
- [Yarn](https://classic.yarnpkg.com/)


## Development server

### Using two terminals

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

In another terminal run `cd server && ỳarn serve` for the backend server. It is located at `http://localhost:8000/`.

### Using a single terminal

Run `yarn serve` to serve both the frontend and the backend of the application. Navigate to `http://localhost:4200/`. The backend server API is located at `http://localhost:8000/`.

## Endpoints

- `/players`: returns an array with all players
- `/players/name/:name` : returns an array of players which name contains :name
- `/players/:id` : returns the player with player_id = :id
- `/teams` : returns an array with all teams
- `/teams/stats` : returns an array with all stats of all teams
- `/teams/name/:name` : returns an array of teams which name contains :name
- `/teams/:id` : returns the team with team_id = :id
- `/teams/:id/lineup` : returns an array with the roster of a team
- `/teams/:id/pointsByPosition` : returns an array with the sum of points made by each position in a team 

## Preview 

Access [NBA19-dashboard](https://nba19-dashboard.mateuscleite.vercel.app/) to see a preview of this project in your browser.

Frontend deployment was made using [Vercel](https://vercel.com/)

Backend deployment was made using [Heroku](www.heroku.com)

