console.log('Executing index.js script...');
//
// Інкапсуляція, Поліморфізм, Наслідування.
// Приховування (приватні методи до прикладу), ..., extends
//
// Клас - це шаблон об'єкта (інстанса).
// Обєкт створений за допомогою класу - це його інстанс.
// 
// 1. Будемо писати клас `Blogger` для створення об'єкта блогера з наступними властивостями:
// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
// Додамо метод `getInfo()`, який, повертає рядок:
// `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.
// Додамо метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.
// class Blogger {
//     constructor({ email, age, numberOfPosts, topics }) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// };
// const mango = new Blogger({
//     email: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// mango.updatePostCount(5);
// console.log(mango.getInfo());
// // console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// // mango.updatePostCount(5);
// // console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
// const poly = new Blogger({
//     email: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
//
//
//
// 2. Будемо писати клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.
// Додамо наступні методи класу:
// - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         this.items = this.items.filter((existingItem) => {
//             return existingItem !== item;
//         });
//     }
// }
// const storage = new Storage(['apple', 'lemon', 'cherry', 'watermelon']);
// const items = storage.getItems();
// storage.addItem('banana');
// storage.removeItem('lemon');
// console.log(storage.items);
//
//
//
// ========!!!ДУЖЕ ВАЖЛИВИЙ ПРИКЛАД!!!========
// 3. Будемо писати клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголосимо приватні властивості `#login` та `#email`, доступ до яких буде через
// гетер та сетер `login` та `email`. Ускладнимо все для себе і додамо поле password.

// class User {
//     static userType = {
//         ADMIN: 'ADMIN',
//         DEMO: 'DEMO'
//     }
//     static userCount = 0;
//     static addToUserCount() {
//         this.userCount += 1;
//     }

//     #login;
//     #email;
//     #password;

//     constructor(login, email, password) {
//         this.#login = login;
//         this.#email = email;
//         this.#password = password;
//         User.addToUserCount();
//     }

//     get getCreds() {
//         const enteredPassword = prompt('Enter password');
//         if (this.#password === enteredPassword) {
//             return `Your email is: ${this.#email}. Your login is ${this.#login}`;
//         }
//         return 'You are not Jake!!!';
//     }

//     set setLogin(newLogin) {
//         const enteredPassword = prompt('Enter password');
//         if (this.#password === enteredPassword) {
//             this.#login = newLogin;
//         } else {
//             console.log('You are not Jake. You cannot reset login');
//         }
//     }

//     set setEmail(newEmail) {
//         const enteredPassword = prompt('Enter password');
//         if (this.#password === enteredPassword) {
//             this.#email = newEmail;
//         } else {
//             console.log('You are not Jake. You cannot reset login');
//         }
//     }
// }

// const jakeUser = new User('jake123', 'jake@gmail.com', '1');
// const mikeUser = new User('mike123', 'mike@gmail.com', '1');
// const johnUser = new User('john123', 'john@gmail.com', '1');
// const jackUser = new User('jack123', 'jack@gmail.com', '1');

// console.log({
//     jakeUser, mikeUser, johnUser, jackUser, User
// });
// jakeUser.setLogin = 'jakeee321';
// jakeUser.setEmail = 'jakeee321@yahoo.com';
// console.log(jakeUser.getCreds);

// console.log(jakeUser.#email);
//
//
// 4. Будемо писати клас `Notes` який керує колекцією нотаток у властивості `items`.
// Замітка це об'єкт із властивостями `text` та `priority`. Додамо класу статичну
// властивість `Priority`, у якій зберігатиметься об'єкт із пріоритетами.
// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
// }
// Додамо методи `addNote(note)`, `removeNote(text)` та
// `updatePriority(text, newPriority)`.
// class Notes {
//     static priorities = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     }

//     constructor(items) {
//         this.items = items;
//     }

//     addNote(note) {
//         this.items.push(note);
//     }

//     removeNote(text) {
//         this.items = this.items.filter((existingItem) => {
//             return text !== existingItem.text;
//         });
//     }

//     updateNote(text, newPriority) {
//         const foundNote = this.items.find((existingItem) => existingItem.text === text);
//         foundNote.priority = newPriority;
//     }
// }


// const myNotes = new Notes([]);
// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.priorities.LOW });
// console.log(myNotes.items);
// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.priorities.NORMAL,
// });
// console.log(myNotes.items);
// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);
// myNotes.updateNote('Моя друга замітка', Notes.priorities.HIGH);
// console.log(myNotes.items);
//
//
//
// 5. Будемо писати клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.
//
//
//
// 6. Переглянемо клас написаний з використанням наслідування. Батьківський клас - Car, та дочірній - Model.
// class AliveBeing {
//     constructor(isBreathing, isDrinkingWater) {
//         this.isBreathing = isBreathing;
//         this.isDrinkingWater = isDrinkingWater;
//     }

//     getAliveBeingInfo() {
//         return `Is breathing: ${this.isBreathing}. isDrinkingWater: ${this.isDrinkingWater}`;
//     }
// }

// const bug = new AliveBeing(false, true);

// class Cat extends AliveBeing {
//     constructor(saysMeyow, isBreathing, isDrinkingWater) {
//         super(isBreathing, isDrinkingWater);
//         this.saysMeyow = saysMeyow;
//     }

//     getCatInfo() {
//         return this;
//     }
// }

// class Dog extends AliveBeing {
//     constructor(saysHav, isBreathing, isDrinkingWater) {
//         super(isBreathing, isDrinkingWater);
//         this.saysHav = saysHav;
//     }

//     getDogInfo() {
//         return this;
//     }
// }

// const myrchuk = new Cat(true, true, true);
// const brovko = new Dog(true, true, true);
// console.log(myrchuk.getCatInfo());
// console.log(myrchuk.getAliveBeingInfo());
// console.log(brovko.getDogInfo());
// console.log(brovko.getAliveBeingInfo());
