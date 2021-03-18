'use strict';

//Задание 

//1) СОздать переменную numberOfFilms и в неё поместить 
//ответ от пользователя на вопрос: 'Сколько фильмов вы уже посмотрели?'
//2) Создать объект personalMoviesDB и в него поместить такие свойства:
// - count - сюда передается ответ на первый вопрос
// - movies - в это свойство пометстить пустой объект
// - actors - тоже поместить пустой объект
// - genres - сюда поместить пустой массив
// - privat - в это свойство поместить Boolean(логическое) значение false 

//3) Задайте пользователю по два раза вопросы:
// - 'Какой фильм вы смотрели последний раз?'
// - 'На сколько вы бы его оценили ?'
// Ответы стоит поместить в отдельные переменные 
// Записать ответы в объект movies в формате:
// movies: {
//     'logan': '8.1'
// }
// Проверить чтобы все работало без ошибок



const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Какой фильм вы смотрели последний раз?');
const b = prompt('На сколько вы бы его оценили ?');
const c = prompt('Какой фильм вы смотрели последний раз?');
const d = prompt('На сколько вы бы его оценили ?');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(`count: ${personalMoviesDB.count}`);
console.log(personalMoviesDB.movies);

//Я закончил