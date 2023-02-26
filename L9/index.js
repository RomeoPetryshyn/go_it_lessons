// console.log('Executing index.js script...');
//
//
// ВАЖЛИВІ ТЕОРЕТИЧНІ ПУНКТИ ПО ТЕМІ
//
// function doStuff() {}; // function declaration
// const doStuff = function() {} // function expression
//
// ===1===
// Першо-початково - кожна функція визначається з власним this. У випадку коли ми працюємо
// в strict mode - this нашої функції буде undefined якщо вона не оголошена всередині якогось конкретного контексту.
// 'use strict';
// const foo1 = function() {
//     console.log(this);
// }
// function foo2() {
//     console.log(this);
// }
// // Стрілочні функції не мають власного this, а посилаються на this глобальне (відповідно до контексту)
// const foo3 = () => {
//     console.log(this);
// }
// foo1(); // undefined if WITH 'use-strict', Window - if WITHOUT use strict
// foo2(); // undefined if WITH 'use-strict', Window - if WITHOUT use strict
// foo3(); // Window
//
// ===2===
// Використовуйте .bind(), якщо ви хочете, щоб цю функцію ПІЗНІШЕ викликали з 
// певним контекстом (через bind ми створюємо копію функції). 
// Використовуйте .call() або .apply(), якщо ви хочете негайно викликати функцію та змінити контекст.
// Call/apply викликає функцію негайно, тоді як bind повертає функцію, яка 
// після виконання пізніше матиме правильний контекст для виклику вихідної функції. 
// Таким чином ви можете підтримувати контекст в асинхронних зворотних викликах і подіях (детальніше на наступних уроках).
//
// ===3===
// Синтаксис:
// call(thisArg, arg1, /* …, */ argN)
// apply(thisArg, argsArray)
// bind(thisArg, arg1, arg2, /* …, */ argN)
//
//
//
// 1. Будемо писати метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості `stones`.
// const chopShop = {
//     stones: [
//       { name: 'Emerald', price: 1300, quantity: 4 },
//       { name: 'Diamond', price: 2700, quantity: 3 },
//       { name: 'Sapphire', price: 1400, quantity: 7 },
//       { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {},
// };
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
//
//
//
// 2. Будемо рефакторити методи об'єкту `phonebook` щоб код запрацював.
// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: generateId(),
//       createdAt: getDate(),
//     };
//     contacts.push(newContact);
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };
// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );
//
//
//
// 3. Будемо писати об'єкт `calculator` з наступними методами:
// - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.
// - `divide(dividerName)` - ділить збереженe поле з ім'ям dividerName на інше збережене поле
// - `subtract(substractorName)` - віднімає від збереженого поля з ім'ям substractorName інше збережене поле
// const calculator = {};
//
//
//