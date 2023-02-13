console.log('Executing index.js script...');
// Q1.5
// function doStuff() {}; // function declaration
// const doStuff = function() {} // function expression
// // Example 2
// doStuff(); 
// function doStuff() {}; // помилки не буде
// // Example 1
// doStuff(); 
// const doStuff = function () {}; // помилка буде
//
//
//
// 1. Будемо писати функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.
// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// function calcBMI(weight, height) {
//     const heightCorrectStringNumber = height.replace(',', '.');
//     const heightNum = Number(heightCorrectStringNumber);
//     const squareHeightNum = Math.pow(heightNum, 2);
//     const weightCorrectStringNumber = weight.replace(',', '.');
//     const weightNumber = Number(weightCorrectStringNumber);
//     const calculatedResult = weightNumber/squareHeightNum
//     return calculatedResult.toFixed(1);
// }
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
//
//
//
// 2. Будемо писати функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.
// const findMin = function (value1, value2) {
//     if (value1 < value2) {
//         return value1;
//     }
//     if (value2 < value1) {
//         return value2;
//     }
//     return value1;
// };
// console.log(findMin(2, 5)); // 2
// console.log(findMin(3, -1)); // -1
// console.log(findMin(1, 1)); // 1

//
//
//
// 3. Будемо писати функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.
// function getRectArea(dimensions) {
//     const arrayOfValue = dimensions.split(' ');
//     const firstElement = Number(arrayOfValue[0]);
//     const secondElement = Number(arrayOfValue[1]);
//     return firstElement * secondElement;
// }
// console.log(getRectArea('8 11'));
// console.log('test1-test2-test3-test4'.split('-'));
//
//
//
// 4. Будемо писати функцію `logItems(items)`, яка отримує масив та використовує цикл
// `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.
// Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.
// logItems(['Mango', 'Poly', 'Ajax', 'Watermelon', 'Apple']);
// logItems(['John', 'Jack', 'Jeremy', 'Jake', 'Jackson']);

// function logItems(items) {
//     for (let i = 0; i < items.length; i++) {
//         const index = i + 1;
//         const element = items[i];
//         console.log(`${index}-${element}`);
//     }
// }
//
//
//
// 5. Будемо писати функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.
// const printContactsInfo = function(names, phones) {
//     const namesArray = names.split(',');
//     const phonesArray = phones.split(',');
//     let i = 0;
//     while (i < phonesArray.length) {
//         const name = namesArray[i];
//         const phoneNumber = phonesArray[i];
//         console.log(`Name: ${name}. Phone Number: ${phoneNumber}`);
//         i+=1;
//     }
// }
// printContactsInfo('Jacob,William,Solomon,Artemis','89001234567,89001112233,890055566377,890055566300');
//
//
//
// 6. Будемо писати функцію `findLargestNumber(numbers)`яка шукає найбільше число в масиві.
// function findLargestNumber(numbers) {
//     let maxNumber = numbers[0];
//     for (const number of numbers) {
//         if (number > maxNumber) {
//             maxNumber = number;
//         }
//     }
//     return maxNumber;
// }
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
//
//
//
// 7. Будемо писати функцію `calcAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.
// function calAverage() {
//     // let sum = 0;
//     // console.log(args);
//     // for (let index = 0; index < args; index++) {
//     //     const item = arguments[index];
//     //     sum += item;
//     // }
//     // return sum / args;
//     // let sum = 0;
//     // let i = 0;
//     // const argumentsSize = arguments.length;
//     // const argumentsArray = [];
//     // do {
//     //     const item = arguments[i];
//     //     argumentsArray.push(item);
//     //     i+=1;
//     // } while (i < argumentsSize);
//     // console.log(Array.from(arguments));
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
//
//
//
// 8. Будемо писати функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minutes).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
//
//
//
// 9. Будемо писати функції для роботи з колекцією навчальних курсів `courses`:
// - `addCourse(name)` - додає курс до кінця колекції
// - `removeCourse(name)` - видаляє курс із колекції
// - `updateCourse(oldName, newName)` - змінює ім'я на нове
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// *важливо:| shift(видаляє перший елемент з масиву)     |     pop(видаляє останній елемент з масиву)   |
//          | unshift(додає елемент на початок масиву)   |     push (додає елемент в кінець масиву),    |
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// function addCourse(course) {
//     if (!courses.includes(course)) {
//         courses.push(course);
//     } else {
//         console.log('Ви маєте курс');
//     }
// }
// function removeCourse(course) {
//     let hasDeletedItem = false;
//     for (let i = 0; i < courses.length; i++) {
//         const existingCourse = courses[i];
//         if (existingCourse === course) {
//             delete courses[i];
//             hasDeletedItem = true;
//         }
//     }
//     if (!hasDeletedItem) {
//         console.log("Курс із таким ім'ям не знайдено");
//     }
// }
// function updateCourse(updateFrom, updateTo) {
//     const updateFromIndex = courses.indexOf(updateFrom);
//     courses[updateFromIndex] = updateTo;
// }
//
//
//



// Q1.5
// function calcSumm(a, b) {
//     if (b === 1) {
//         return a;
//     } else {
//         return a * calcSumm(a, b - 1);
//     }
// };

// console.log(calcSumm(2, 3)); // 8
// step 1: result: 2 * calcSumm(2, 3 - 1); множимо 2 на результат calcSumm(2, 3 - 1)
// step 2(calcSumm(2, 3 - 1)): 2 * calcSumm(2-1); множимо 2 на результат calcSumm(2-1)
// step 3(calcSumm(2-1)): результатом є число 2.
// результат кроку 3 є число 2
// результат кроку 2 є число 2 помножити на результат кроку 3 (число 2)
// результат кроку 1 є число 2 помножити на результат кроку 2 (число 2 * 2 * 2)

// 2 * 2 * 2 = 8;















