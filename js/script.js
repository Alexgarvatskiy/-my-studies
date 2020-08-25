"use strict";

const answers = []; 

answers[0] = prompt('как ваше имя ? ', '');
answers[1] = prompt('как ваша фамилия ? ', '');
answers[2] = prompt('сколько вам лет ? ', '');

console.log(typeof(answers));

// условные операторы 
const user = +prompt('Сколько вам лет? ', '');

if (user >= 18) {
    console.log('вы совершенно летний');
} else if (user <= 18) {
     console.log('вам нет 18');
} else {
    console.log('error');
}