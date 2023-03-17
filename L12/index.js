console.log('Executing index.js script...');
//
//
//
// 1. 
// addEventListener(type, listener) - додаємо слухач подій
// target.removeEventListener(type, listener) - видаляємо слухач подій
// Будемо рухати кубик по сторінці при нажатті на нього
// const box = document.querySelector('.box');
// box.addEventListener('click', onClick);
// let step = 0;
// function onClick(event) {
//     step += 50;
//     // TBD
// }
//
//
//
// 2. Будемо виводити текст при нажатті на кнопку і робити кнопку неактивною після того
// const button = document.getElementById('show-greeting');
// const divBlock = document.getElementsByClassName('js-greeting')[0];
// button.addEventListener('click', (_event) => {
//     // TBD
// });
//
//
//
// 3.
// Напишемо чотири кнопки стрілочок. За допомогою тих кнопок будемо рухати наш кубик по сторінці
// const arrows = document.querySelectorAll('.arr');
// const box = document.querySelector('.box');
// console.log({arrows, box});
//
//
//
// 4. Будемо рухати наш бокс натисканням на кнопки клавіатури
// document.addEventListener('keydown', (_event) => {
//     console.log({ code: _event.code, key: _event.key });
// });
//
//
//
// 5. Будемо писати динамічний пошук країн
// const countries = [
//     { name: 'Ukraine', capital: 'Kyiv', squareKM: 603700, where: 'Europe' },
//     { name: 'Poland', capital: 'Warsaw', squareKM: 322575, where: 'Europe' },
//     { name: 'Germany', capital: 'Berlin', squareKM: 357588, where: 'Europe' },
//     { name: 'France', capital: 'Paris', squareKM: 551695, where: 'Europe' },
//     { name: 'Spain', capital: 'Madrid', squareKM: 505990, where: 'Europe' },
//     { name: 'Portugal', capital: 'Lisbon', squareKM: 92212, where: 'Europe' },
//     { name: 'Italy', capital: 'Rome', squareKM: 302073, where: 'Europe' },
//     { name: 'Greece', capital: 'Athens', squareKM: 131957, where: 'Europe' },
//     { name: 'United Kingdom', capital: 'Athens', squareKM: 243610, where: 'Europe' },
//     { name: 'Canada', capital: 'Ottawa', squareKM: 9985000, where: 'America' },
//     { name: 'USA', capital: 'Washington', squareKM: 9834000, where: 'America' },
//     { name: 'Mexico', capital: 'Mexico', squareKM: 1973000, where: 'America' },
// ];
// const input = document.getElementsByTagName('input')[0];
// input.addEventListener('input', (_event) => {
//     console.log(_event.target.value);
// });
//
//
//
