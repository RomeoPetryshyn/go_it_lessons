console.log('Executing index.js script...');

// const array1 = [1,2,3,4,5];
// const array2 = array1.splice(2, 1);
// console.log(array2);


// const array1 = [1,2,3];
// const array2 = [1,2,3];
// const isSameSize = array1.length === array2.length;
// if (isSameSize) {
//     let areSameArrays = true;
//     for (let i=0; i < array1.length; i++) {
//         const array1Element = array1[i];
//         const array2Element = array2[i];
//         if (array1Element !== array2Element) {
//             areSameArrays = false;
//         }
//     }
// }
// 
// for (let i = 0; i<= 20; i++) {
//     console.log(i);
//     if (i === 10) {
//         break;
//     }
// }
// [1,2,3,4,5,6,7].slice(3, 5);
// "I am JS".split(' ');
// const array1 = ['word1', 'word2', 'word3-longer'];
// let longestWord = array1[0];
// for (let i = 0; i< array1.length; i++) {
//     const word = array1[i];
//     if (longestWord.length < word.length) {
//         longestWord = word;
//     }
// }
// let = 5;
// i = i + 1; // 5+1=6;

// array1.forEach(() => {

// });
//
//
// 1. Створимо масив genres з елементами «Jazz» та «Blues».
// - Додамо «ROCK» до кінця. (push);
// - Будемо виводити у консоль перший елемент масиву.
// - Будемо виводити у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// - Видалимо перший елемент проте так щоб вивести його у консоль (shift);
// - Вставимо «Country» та «Reggae» на початок масиву
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *важливо:| shift(видаляє перший елемент з масиву)     |     pop(видаляє останній елемент з масиву)   |
//          | unshift(додає елемент на початок масиву)   |     push (додає елемент в кінець масиву),    |
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const genres = ['Jazz', 'Blues'];
// genres.push('Rock');
// const firstElement = genres[0];
// console.log('firstElement: ', firstElement);
// const arraySize = genres.length;
// const lastElement = genres[arraySize - 1];
// console.log('lastElement', lastElement);
// const test = genres.shift();
// console.log('test: ', test);
// genres.unshift('Country', 'Reggae');
// console.log('final genres after unshift', genres);
//
//
//
// 2. Напишімо скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом. (split)
// const values = '8 11';
// const arrayOfValue = values.split(' ');
// console.log(arrayOfValue); // ['8', '11'];
// const firstElement = Number(arrayOfValue[0]); // 8
// const secondElement = Number(arrayOfValue[1]); // 11
// const square = firstElement * secondElement; // 88
// console.log('square: ', square);
//
//
//
// 3. Напишімо скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву будемо виводити в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.
// const fruits = ['apple', 'orange', 'banana', 'lemon', 'watermelon'];
// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     const elementPosition = i + 1;
//     console.log(`${elementPosition}:${fruit}`);
// }
// fruits.forEach((fruit, index) => {
//     const elementPosition = index + 1;
//     console.log(`${elementPosition}:${fruit}`);
// });
//
//
//
// 4. Напишімо скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// for (let i = 0; i < namesArray.length; i++) {
//     const name = namesArray[i];
//     const phoneNumber = phonesArray[i];
//     console.log(`Name: ${name}. Phone Number: ${phoneNumber}`);
// }



//
//
//
// 5. Напишімо скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.
// const testString = 'Welcome to the future';
// const testStringArray = testString.split(' '); // ['Welcome', 'to', 'the', 'future']
// testStringArray.shift(); 
// testStringArray.pop();
// const testStringWithoutWords = testStringArray.join(' ');
// console.log(testStringWithoutWords.trim());

//
//
// 6. Напишімо скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.
// const testString = 'Welcome to the future';
// const testStringReverse = testString.reverse();
// for (let i = testString.length - 1; i >= 0; i--) {
//     console.log(testString[i]);
// }
//
//
//
// 7. Напишімо скрипт для сортування масиву рядків в алфавітному порядку за першою літерою елемента. (sort)
// const langs = ['арсен', 'василь', 'борис', 'іван'];
// const sortedArray = langs.sort();
// console.log(sortedArray);
// for (let i = 0; i < langs.length; i++) {
//     const firstLetter = langs[0];
// }
//
//
//
// 8. Напишімо скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуємо цикл для розв'язання задачі.
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for(let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (min > number) {
//         min = number;
//     }
// }
// console.log(min); // 1
//
//
//





