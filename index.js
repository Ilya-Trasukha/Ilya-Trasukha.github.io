// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// const whatFilm = prompt('Один из последних просмотренных фильмов?')
// const rate = prompt('На сколько оцените его?')
// const personalMovieDB = {
//   count: numberOfFilms,
//   movie: {
//     [whatFilm]: rate
//   },
//   actors: {},
//   geners: [],
//   privat: false
// };
// console.log(personalMovieDB);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: 0,
  movies: [],
  actors: {},
  geners: [],
  privat: false
};


if (numberOfFilms > 0){//если введенное число больше 0 тогда будет работаь цикл
   personalMovieDB.count = numberOfFilms
  for(let i = 1; i <= numberOfFilms; i++){
    let lastMovie = prompt('Один из последних просмотренных фильмов?');
    
    while (!lastMovie || lastMovie.length === 0) {
      lastMovie = prompt('Один из последних просмотренных фильмов?');
    }
    let review = +prompt('На сколько оцените его? От 1 до 5')
    while (!(review >= 1 && review <= 5)) {
      review = +prompt('На сколько оцените его? От 1 до 5')
    }
    personalMovieDB.movies.push({[lastMovie]: review})
  }
} 

if (personalMovieDB.count < 10 && personalMovieDB.count !==0) {
  alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
  alert('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман')
}
console.log(personalMovieDB);


