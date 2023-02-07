console.log('Executing JS script... HERE we go');

// alert('some alert');
// console.log('texxt');

// console.log('some script');

// const johnAge = 30;
// const jackAge = '30';

// console.log(johnAge === jackAge);
// console.log(johnAge == jackAge);

// let mangoName = 'mango';
// console.log(mangoName.indexOf('nam'));

// console.log(Number.parseInt('25.7px'));
// console.log(Number('John'));
// console.log(Number('25.5'));

// if(5>3) {
//     var john = 5;
//     let jack = 10;
// }

// console.log(john);
// console.log(jack);




















// ** Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
// const apples = 47;
// const grapes = 135;
// const total = apples+grapes;
// console.log(total);
// const diff1 = apples-grapes;
// const diff2 = grapes-apples;
// console.log(diff1);
// console.log(diff2);


// ** Заміни вираз перевизначення комбінованим оператором +=.
// let students = 100;
// students += 50;
// console.log(students);

// ** Розбери пріоритет операторів в інструкції привласнення значення змінної result.
// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ** Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
// const value1 = 27.3;
// const value2 = 27.5;
// const value3 = 27.9;

// console.log(Math.floor(value1));
// console.log(Math.floor(value2));
// console.log(Math.floor(value3));

// console.log(Math.ceil(value1));
// console.log(Math.ceil(value2));
// console.log(Math.ceil(value3));

// console.log(Math.round(value1));
// console.log(Math.round(value2));
// console.log(Math.round(value3));

// ** Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots-defenceBots;
// const message = `Cyberdyne Systems has ${totalBots} in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ** Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// let weight = '88,3';
// let height = '1.75';

// const heightNum = Number(height);
// const squareHeightNum = Math.pow(heightNum, 2);
// const weightCorrectStringNumber = weight.replace(',', '.');
// const weightNumber = Number(weightCorrectStringNumber);
// const result = weightNumber/squareHeightNum;
// console.log(result.toFixed(1));




// const bmi = ;
// console.log(bmi); // 28.8

// Math.round(n * 10) / 10
// Math.pow(n, 2);
// toFixed(1);
// 

// ** Яким буде результат виразів?
// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '22');
// console.log('2' < '12');
// console.log(200<101);
// console.log('11'>'12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log(typeof 'false');
// console.log(1 == true);
// console.log(0 == false);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

// ** Яким буде результат виразів?
// console.log(true && 3 && 0 && 1000 && 99);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// null, undefined, 0, false.
// console.log(true && 0 && 'kiwi');
// console.log(false || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || undefined || 0);
// console.log((1 && null && 2) >= 0);
// console.log(null || (2 && 3) || 4);

// ** Відрефакторити код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне
// undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевірити роботу скрипта для наступних
// значень змінної incomingValue: null, undefined, 0, false. 
// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ** Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;
//
const totalMinutes = 1441;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// console.log(`${hours}:${minutes}`)
// '24:01';
//

console.log((1 && null && 2) >= 0)

// console.log(String(minutes).padStart(2, 0));

// console.log('1'.padStart(5, 0));

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

