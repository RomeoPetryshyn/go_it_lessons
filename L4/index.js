console.log('Executing index.js script...');

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
// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
//
//
//
// 2. Будемо писати функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.
// console.log(findMin(2, 5)); // 2
// console.log(findMin(3, -1)); // -1
// console.log(findMin(1, 1)); // 1
//
//
//
// 3. Будемо писати функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.
// function getRectArea(dimensions) {}
// console.log(getRectArea('8 11'));
//
//
//
// 4. Будемо писати функцію `logItems(items)`, яка отримує масив та використовує цикл
// `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.
// Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.
// function logItems(items) {}
// logItems(['Mango', 'Poly', 'Ajax', 'Watermelon', 'Apple']);
// logItems(['John', 'Jack', 'Jeremy', 'Jake', 'Jackson']);
//
//
//
// 5. Будемо писати функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.
// function printContactsInfo(names, phones) {}
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
//
//
//
// 6. Будемо писати функцію `findLargestNumber(numbers)`яка шукає найбільше число в масиві.
// function findLargestNumber(numbers) {}
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
//
//
//
// 7. Будемо писати функцію `calcAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.
// function calAverage() {
//     console.log(arguments);
//     console.log(arguments.length);
//     let sum = 0;
//     const argumentsSize = arguments.length;
//     for (let index = 0; index < argumentsSize; index++) {
//         const item = arguments[index];
//         sum += item;
//     }
//     return sum / argumentsSize;
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
// function formatTime(minutes) {}
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
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
//
//
//