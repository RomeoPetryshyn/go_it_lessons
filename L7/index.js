console.log('Executing index.js script...');


// console.error('Error happened');

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

//
// 1. Будемо писати наступні функції:
// - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
//   коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
//   властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
//   консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну 
//   вартість товару в консоль
// function createProduct(partialProduct, callback) {
//     const fullProduct = {
//         id: new Date(),
//         ...partialProduct
//     };
//     callback(fullProduct);
// }
// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice({ price, quantity }) {
//     console.log(`Total value: ${price * quantity}`)
// }

// createProduct({ name: 'Apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'Lemon', price: 20, quantity: 5 }, logTotalPrice);
// const testFunc1 = () => {
//     return 'Jake';
// }
// const testFunc2 = () => {
//     return 'John';
// }
// const testFunc3 = () => {
//     return 'Josh';
// }
// const parentFunc = (testCallback) => {
//     const name = testCallback();
//     console.log(name);
//     return name;
// };
// parentFunc(testFunc1);
// parentFunc(testFunc2);
// parentFunc(testFunc3);
//
//
//
// 2. Будемо покращувати наш інтернет банкінг.
// Будемо додавати в об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
// `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// другий та третій - коллбеки.
// Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSuccess в іншому випадку.
// Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// або дорівнює нулю, і onSuccess в іншому випадку.
// const TRANSACTION_LIMIT = 1000;
// const account = {
//   username: 'Jake',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//         return onError('Amount is bigger than TRANSACTION_LIMIT');
//     }
//     if (amount > this.balance) {
//         return onError('Amount is bigger than balance');
//     }
//     this.balance -= amount;
//     onSuccess(`New balance = ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//         return onError('Amount is bigger than TRANSACTION_LIMIT');
//     }
//     if (amount <= 0) {
//         return onError('Amount <= 0');
//     }
//     this.balance += amount;
//     onSuccess(`New balance = ${this.balance}`);
//   },
// };
// function handleSuccess(message) {
//     console.log('Success: ' + message);
// }
// function handleError(message) {
//     console.log('Error: ' + message);
// }
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
//
//
//
// 3. Будемо писати функцію `each(array, callback)`, яка першим параметром очікує
// масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.
// function test(array, callback) {
//     const resultingArray = [];
//     for (const item of array) {
//         const itemResult = callback(item);
//         resultingArray.push(itemResult);
//     }
//     return resultingArray;
// }
// console.log(
//     test([64, 49, 36, 25, 16], function (value) {
//       return value * 2;
//     }),
// );
// console.log(
//     test([64, 49, 36, 25, 16], function (value) {
//       return value - 10;
//     }),
// );
// console.log(
//     test([64, 49, 36, 25, 16], function (value) {
//       return Math.sqrt(value);
//     }),
// );
// console.log(
//     test([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//       return Math.ceil(value);
// }),
// );
// console.log(
//     test([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//       return Math.floor(value);
//     }),
// );
//
//
//
// 4. Будемо рефакторити код використовуючи стрілочні функції.
// const createProduct = (partialProduct, callback) => {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
// }
// const logProduct = (product) => {
//     console.log(product);
// }
// const logTotalPrice = ({quantity, price}) => {
//     console.log(price * quantity);
// }
// function createProduct(partialProduct, callback) {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
// }
// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }
// createProduct({ name: 'Apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'Lemon', price: 20, quantity: 5 }, logTotalPrice);
//
//
//
// 5. Продовжуємо рефакторити код за допомогою стрілочних функцій. Цього разу наш інтернет банкінг
// const TRANSACTION_LIMIT = 1000;
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT) {
//         onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       } else if (amount > this.balance) {
//         onError(`Amount can't exceed account balance of ${this.balance} credits`);
//       } else {
//         this.balance -= amount;
//         onSuccess(`Account balance: ${this.balance}`);
//       }
//   },
//   deposit: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT) {
//         onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       } else if (amount <= 0) {
//         onError(`Amount must be more than 0 credits`);
//       } else {
//         this.balance += amount;
//         onSuccess(`Account balance: ${this.balance}`);
//       }
//   }
// };
// const handleSuccess = (message) => {
//     const successMessage = `Success! ${message}`;
//     console.log(successMessage);
//     return successMessage;
// }
// const handleError = (message) => {
//     const errorMessage = `Error! ${message}`;
//     console.log(errorMessage);
//     return errorMessage;
// }
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
//
//
//
// 6. Продовжуємо рефакторити код за допомогою стрілочних функцій
// const test = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//       newArr.push(callback(el));
//     }
//     return newArr;
// };
// console.log(
//     test([64, 49, 36, 25, 16], function (value) {
//       return value * 2;
//     }),
// );
// console.log(
//     test([64, 49, 36, 25, 16], function (value) {
//       return value - 10;
//     }),
// );
// console.log(
//     test([64, 49, 36, 25, 16], function (value) {
//       return Math.sqrt(value);
//     }),
// );
// console.log(
//     test([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//       return Math.ceil(value);
//     }),
// );
// console.log(
//     test([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//       return Math.floor(value);
//     }),
// );
//
//
//
// 7. Знову рефакторинг. Цього разу використовуємо стрілочні функції на конструкцію forEach
// function logItems(items) {
//     // () => {
//     // }
//     // [].forEach
//     // items.forEach((value, index, fullArray) => {
//     //     console.log(`${index + 1} - ${value}`)
//     // });
//     // console.log(items);
//     // for (let i = 0; i < items.length; i += 1) {
//     //   console.log(`${i + 1} - ${items[i]}`);
//     // }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['Apple', 'Watermelon', 'Banana', 'Lemon', 'Strawberry']);
//
//
//
// 8. Рефакторимо за допомогою методу `forEach` та стрілочних функцій.
// const printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     nameList.forEach((item, index) => {
//         console.log(`${item} : ${phoneList[index]}`);
//     })
//     // for (let i = 0; i < nameList.length; i += 1) {
//     //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }
// }
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });
//
//
//
// 9. Рефакторимо за допомогою методу `forEach` та стрілочних функцій.
// function calсulateAverage(...args) {
//     let total = 0;
//     // () => {
//     // }
//     args.forEach( (item) => {
//         total += item;
//     } )
//     return total / args.length;
// }
// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
//
//
//
//


// const arr1 = [1,2,3,4];
// for (let i = 0; i <= arr1; i++) {
//     console.log(arr1[i]);
// }

// arr1.forEach((value, index) => {
// });


// function processCall(recipient, onAvailable, onNotAvailable) {
//     if (!isRecipientAvailable) {
//         onNotAvailable(recipient);
//         return;
//     }
//     onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);



// const acc = {
//     balance: 400,
//     testF: () => {
//         console.log(acc);
//     }
// }
// console.log(acc.testF());



// [2, 4, 6, 8].forEach( (item, index, items) => {
//     console.log({ item, index, items });
// } )

// let test;
// console.log(test);
// () => {
//     console.log('Text');
// };
// console.log(test);



// [2, 4, 6, 8].forEach((item, index, items) => {
//     console.log({item, index, items})
// });


