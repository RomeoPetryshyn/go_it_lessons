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

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//     // console.log(`type: ${typeof key}, key itself: ${key}`);
//     // console.log(`ключ-${key}:значення-${user[key]}`);
// }



//
//
//
// 2. Object.values(). У нас є об'єкт, де зберігаються зарплати наших колег :D 
// Будемо писати код для підсумовування всіх зарплат і збереження результататів у змінній 
// sum. Повинно вийти . Якщо об'єкт `salaries` порожній, то результат має бути 0.
// const salaries = {
//     John: 1500,
//     Ann: 2500,
//     Pete: 3200,
//     Mike: 1800
// };
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//     console.log(salary);
//     sum += salary;
// }
// console.log(sum);
//
//
//
// 3. Будемо писати функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта
// const stones1 = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
//     { name: 'Смарагд', price: 1200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     let sum = 0;
//     for (const stoneData of stones) {
//         const stoneNameInArray = stoneData.name;
//         if (stoneNameInArray === stoneName) {
//             const stonePrice = stoneData.price;
//             const stoneQuantity = stoneData.quantity;
//             const stonePriceSum = stoneQuantity * stonePrice;
//             sum += stonePriceSum;
//         }
//     }
//     return `${stoneName}:${sum}`;
// }

// console.log(calcTotalPrice(stones1, 'Смарагд'));



// for (const stoneData of stones) {
//     const stonePrice = stoneData.price;
//     const stoneQuantity = stoneData.quantity;
//     const stonePriceSum = stoneQuantity * stonePrice;
//     sum += stonePriceSum;
// }

// let sum = 0;
// for (const stoneData of stones) {
//     const stonePrice = stoneData.price;
//     const stoneQuantity = stoneData.quantity;
//     const stonePriceSum = stoneQuantity * stonePrice;
//     sum += stonePriceSum;
// }


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
    createTransaction(amount, type) {
        const transaction = {
            amount,
            type,
        };
        return transaction;
    },
  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Not enough money');
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        for (let transactionIndex = 0; transactionIndex < this.transactions.length; transactionIndex++) {
            if (transactionIndex === id) {
                return this.transactions[transactionIndex];
            }
        }
        return 'Transaction is not found';
    },

    /*
     * Метод повертає всі транзакції
    */
    getAllTransactions() {
        return this.transactions;
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let transactionByTypeSum = 0;
        for (const transaction of this.transactions) {
            const transactionType = transaction.type;
            if (transactionType === type) {
                transactionByTypeSum += transaction.amount;
            }
        }
        return `Type: ${type}, amount: ${transactionByTypeSum}`;
    },
};

account.deposit(200);
account.withdraw(150);
account.deposit(100);
account.deposit(120);
account.withdraw(110);
account.withdraw(20);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));









// const user = {
//     name: 'John',
//     lastName: '',
//     age: 40,
//     children: 3,
//     hasHelicopter: true,
// };

// Q1.1
// Option 1
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



// true/false
// 1,2,3
// 'text1', 'test2'

// [1,2,3], {name: 'John', age: 40};
// const test = {name: 'John', age: 40};
// const test2 = test1;

// const user = {
//     name: 'Jogn',
//     age: 40
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// const obj = {name: 'John'};
// // obj.name;
// obj['name'];
// const testObj = {
//     test1: 'result: 10',
//     test2: 'result: 5',
//     test3: 'result: 3',
// }

// for (const key in testObj) {
//     console.log(typeof key);
//     console.log(testObj[key]);
// }



// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     getBooks() {
//         console.log(this.books);
//       return this.books;
//     },
//     addBook(bookName) {
//       console.log("Цей метод добавить книгу");
//       this.books.push(bookName);
//     },
//   };

//   bookShelf.addBook('Harry Potter');
//   bookShelf.getBooks();


// const testObj = {
//     name: 'John',
//     age: 40
// };

// delete testObj.age;

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смішної людини",
//       author: "Федір Достоєвський",
//       rating: 7.75,
//     },
// ];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].title === 'asdads') {
//         delete books[i];
//     } 
// }