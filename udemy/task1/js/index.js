"use strict";
let movies = document.querySelector(".movie[data-movie='count']");
let last = document.querySelector(".movie[data-movie='last']");
let personalMovieDB = {
  count: 0,
  movies: {
    name: [],
    rate: []
  },
  actors: [],
  genres: [],
  privat: false,
};

const moviesCount = () => {
  personalMovieDB.count = +prompt("How many movies did you watch?");
  console.log("You watched: " + personalMovieDB.count + " movies!");
};
const checkLast = () => {
for(let i = 0; i < 2; i++){
  personalMovieDB.movies['name'][i] = prompt("What was your last movie?");
  console.log("Your last movie was: " + personalMovieDB.movies.name[i]);
  personalMovieDB.movies['rate'][i] = +prompt("Give the movie a grade from 1 to 10");
  console.log("Your grade is: " + personalMovieDB.movies.rate[i]);
}
};

movies.addEventListener("click", moviesCount);
last.addEventListener("click", checkLast);


