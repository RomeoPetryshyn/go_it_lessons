console.log('Executing index.js script...');

// 1. Будемо писати скрипт, який для об'єкта `user`, послідовно:
// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
//
//
//
// 2. Object.values(). У нас є об'єкт, де зберігаються зарплати наших колег :D 
// Будемо писати код для підсумовування всіх зарплат і збереження результататів у змінній 
// sum. Повинно вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.
// const salaries = {
//     John: 1500,
//     Ann: 2500,
//     Pete: 3200,
//     Mike: 1800
// };
//
//
//
// 3. Будемо писати функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
// ];
//
//
//
// 4. Будемо писати скрипт управління інтернет банкінгом. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.
/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {},
  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {},
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {},
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {},
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {},
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {},
};


// // Q1.1
// // Option 1
// const obj = { oldKey: 'value' };
// obj['newKey'] = obj['oldKey'];
// delete obj['oldKey'];
// console.log(obj); // { newKey: 'value' }
// // Option 2
// const obj = { oldKey: 'value' };
// Object.assign(obj, { newKey: obj.oldKey })['oldKey'];
// delete obj['oldKey'];
// console.log(obj); // { newKey: 'value' }
// // Option 3
// const obj = { oldKey: 'value' };
// Object.defineProperty(
//   obj,
//   'newKey',
//   Object.getOwnPropertyDescriptor(obj, 'oldKey')
// );
// delete obj['oldKey'];
// console.log(obj); // { newKey: 'value' }
// In general - we're always creating new property and deleting an old one. It's not a common situation to rename key.
//
//
//
// Q3
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// for (const key in book) {
// // Ключ
//     console.log(key);
//     // Значення властивості з таким ключем
//     console.log(book[key]);
// }