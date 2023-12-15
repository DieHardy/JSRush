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
  if( personalMovieDB.count < 11) alert(`You watched: ${personalMovieDB.count} movies! That's such a small amount of movies!`);
  if( personalMovieDB.count < 31 &&  personalMovieDB.count > 10) alert(`You watched: ${personalMovieDB.count} movies! You're a classical viewer!`);
  if( personalMovieDB.count > 30) alert(`You watched: ${personalMovieDB.count} movies! You love movies :)`);


  console.log("You watched: " + personalMovieDB.count + " movies!");
};
const checkLast = () => {
for(let i = 0; i < 2; i++){
    let a = prompt("What was your last movie?");
    if(a.length < 50 && a.length > 0) {
    let b = +prompt("Give the movie a grade from 1 to 10");
    if(b > 0 && b < 11) {
      personalMovieDB.movies['rate'][i] = b; 
      personalMovieDB.movies['name'][i] = a;
    }
    else {alert('The movie`s grade must be between 1 and 10.'); break;}
  }
    else {alert('The movie`s name must be between 1 and 50 characters.'); break;}
  }
};

movies.addEventListener("click", moviesCount);
last.addEventListener("click", checkLast);


