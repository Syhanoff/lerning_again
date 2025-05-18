/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = 0;

numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

personalMovieDB['count'] = numberOfFilms;

let lastMovie1 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieRaiting1 = prompt('На сколько оцените его?', '');
let lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieRaiting2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie1] = lastMovieRaiting1;
personalMovieDB.movies[lastMovie2] = lastMovieRaiting2;

console.log(personalMovieDB);



