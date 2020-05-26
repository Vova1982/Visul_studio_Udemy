"use strict"
/*console.log('arr'+"- object");
console.log(4 + +"5");

let incr =10,
    decr =10;

    incr++;
    decr--;

    console.log(incr);
    console.log(decr);

    console.log(5%2);
    console.log(2*4==8);

    const isCheck=true,
          isClose=false;
          console.log(isCheck&&isClose);*/
          const numberOfFilms = +prompt("How many movies did you watch?", "");
          const personalMoviesDB = {
            count: numberOfFilms,
            movies: {},
            actors:{},
            genders: [],
            privat: false
          };
          const a = prompt("What did you watch lust time", ""),
           b = prompt("What is you raiting", ""),
           c = prompt("What did you watch lust time", ""),
           d = prompt("What is you raiting", "");


          personalMoviesDB.movies[a]=b;
          personalMoviesDB.movies[c]=d;

          console.log(personalMoviesDB);