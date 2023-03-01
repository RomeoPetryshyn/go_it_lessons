// 'use strict';
// console.log('Executing index.js script...');
//
//
// ВАЖЛИВІ ТЕОРЕТИЧНІ ПУНКТИ ПО ТЕМІ
//
// function doStuff() {}; // function declaration
// const doStuff = function() {} // function expression
//
// ===1===
// Першо-початково - кожна функція визначається з this відповідно до контексту. У випадку коли ми працюємо
// в strict mode - контекст нашої функції буде undefined якщо вона не оголошена всередині якогось конкретного контексту.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// https://www.w3schools.com/js/js_strict.asp
// function getNameFunc() {
//     console.log(this);
// }
// const obj1 = {
//     x: 10,
//     y: function() {
//         console.log(this);
//     }
// }
// // getName();

// const obj = {
//     name: 'Jake',
//     getName: getNameFunc
// };

// console.log(obj.getName());
// console.log(getNameFunc());

// console.log(obj.getName());

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
// Використовуйте .bind(), якщо ви хочете, щоб функцію ПІЗНІШЕ викликали з 
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
// ============================EXAMPLES============================
//
// BIND
// const module = {
//   x: 42,
//   getX: function(testParam) {
//     console.log('testParam', testParam);
//     console.log('Our this is: ', this);
//     return this.x;
//   }
// };
// // module.getX('test');
// const boundGetX = module.getX.bind({x: 50}, 'TEST2');
// console.log(boundGetX());
// console.log(module.getX());
// console.log(module.getX());
// const boundGetX = module.getX.bind({x: 50});
// console.log(boundGetX());
// console.log(module.getX());
//
//
//
//
// APPLY
// const module = {
//   x: 42,
//   getX: function(testParam1, testParam2) {
//     console.log('Params: ', [testParam1, testParam2]);
//     console.log(this);
//     return this.x;
//   }
// };
//
// // console.log(module.getX());
//
// console.log(module.getX.apply({x: 100}, ['testParam1', 'testParam2']));
// console.log(module.getX());
//
//
//
// CALL
// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };
// console.log(module.getX.call({x: 100}, 'testParam1', 'testParam2'));
// console.log(module.getX());
//
//
//

// const userJake = {
//     name: 'Jake',
//     getUserName() {

//     }
// }

// userJake.getUserName();


// 1. Будемо писати метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
// кількістю з властивості `stones`.
// const chopShop = {
//     stones: [
//       { name: 'Emerald', price: 1300, quantity: 4 },
//       { name: 'Diamond', price: 2700, quantity: 3 },
//       { name: 'Diamond', price: 2700, quantity: 1 },
//       { name: 'Sapphire', price: 1400, quantity: 7 },
//       { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice: function(stoneName) {
//         return this.stones.reduce((acc, { name, quantity, price }) => {
//             if (name === stoneName) {
//                 acc += price * quantity;
//             }
//             return acc;
//         }, 0);
//     },
// };
// console.log(chopShop);
// // console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 10800
// // console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// // console.log(chopShop.calcTotalPrice('Ruby')); // 1600
//
//
//
// 2. Будемо рефакторити методи об'єкту `phonebook` щоб код запрацював.
// const phonebook = {
//     contacts: [],
//     add: function(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//         return {allContacts: this.contacts, addedContact: newContact};
//     },
//     generateId: function() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate: function() {
//         return Date.now();
//     }
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
// - `write(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.
// - `divide(dividerName)` - ділить збереженe поле з ім'ям dividerName на інше збережене поле
// const calculator = {
//     write: function(numberOne, numberTwo) {
//         this.numberOne = numberOne;
//         this.numberTwo = numberTwo;
//     },

//     add: function() {
//         return this.numberOne + this.numberTwo; 
//     },

//     mult: function() {
//         return this.numberOne * this.numberTwo;
//     },

//     divide: function(dividerName) { 
//         const firstNumber = this[dividerName];
//         const secondNumberName = dividerName === 'numberTwo' ? 'numberOne' : 'numberTwo';
//         const secondNumber = this[secondNumberName];
//         return firstNumber / secondNumber;
//         // return this[dividerName] / this[dividerName === 'a' ? 'b' : 'a'];
//     },
// };

// calculator.write(10, 5);
// calculator.divide('numberTwo');

// console.log(calculator.add());
// console.log(calculator.mult());
//
//
//



// const obj1 = {
//     name: 'Jake'
// };

// obj1.name; // Jake
// const jakeNameKeyName = 'name';
// obj1[jakeNameKeyName]; // obj1['name'];



// const calculator = {
//     numberOne: 10,
//     numberTwo: 5,

//     divide: function(firstNumberName, secondNumberName) {
//         const firstNumber = this[firstNumberName]; // this.numberTwo // 5;
//         const secondNumber = this[secondNumberName]; // this.numberOne // 10;
//         return firstNumber / secondNumber;
//     },
// };

// calculator.divide('numberTwo', 'numberOne');




