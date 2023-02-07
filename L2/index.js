console.log('Executing index.js script...');
// 1. Використовуючи конструкцію if..else та prompt, створімо код, який питатиме:
// `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
// `ECMAScript`, то показуємо alert з рядком `"Правильно, пане!"`, в іншому випадку -
// `"Не знаєте? ECMAScript!"`
// const input = prompt('Яка офіційна назва JavaScript?');
// const lowerCaseInput = input.toLowerCase();
// if (lowerCaseInput === 'ecmascript') {
//     alert('Правильно, пане!');
// } else {
//     alert('Не знаєте? ECMAScript!');
// }
//
//
//
// 2. Напишімо скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводитимемо рядок `"14 г."`, без хвилин.
//
// const hours = 14;
// const minutes = 0;
// let timestring;
//
// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);
//
//
//
// 3. Напишімо скрипт, який виводить у консоль рядок `"Це позитивне число"`,
// якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, будемо виводити
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.
// const userInput = prompt('Введіть число');
// const numericUserInput = +userInput;
// console.log(numericUserInput);
//
// if (numericUserInput > 0) {
//     console.log('Більше нуля');
// } else if (numericUserInput === 0) {
//     console.log('Нуль');
// } else if (isNaN(numericUserInput)) {
//     console.log('Це взагалі не число');
// } else {
//     console.log('Менше нуля');
// }
//
//
//
// 4. Напишімо скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то будемо виводити в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 512.
// const a = 80;
// const b = 180;

// const isBothVariablesMoreThan100 = a > 100 && b > 100;
// const isAMoreB = a > b;

// if (isBothVariablesMoreThan100 && isAMoreB) {
//     console(a);
// } else if (isBothVariablesMoreThan100 && !isAMoreB) {
//     console(b);
// } else {
//     console.log(b + 512);
// }
//
// if (a > b) {
//     // something
//     return;
// }
//
// const outPut = a > 100 && b > 100 
//     ? a > b ? a : b
//     : b + 512;
//
// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     }
//     if (b > a) {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }
//
//
//
//
// 5. endsWith. Напишімо скрипт скрипт, який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, будемо додавати до кінця значення `link` цей символ. Використовуємо
// конструкцію `if...else`.
// let link = 'https://my-site.com/about';
// const isLinkEndsWithSlash = link.endsWith('/');

// if (!isLinkEndsWithSlash) {
//     link += '/';
// }
// console.log(link);

// if (isLinkEndsWithSlash) {
//     console.log(link);
// } else {
//     link+='/';
//     console.log(link);
// }


//
//
//
// 6. includes та логічне «І». Напишімо скрипт, який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, будемо додавати до кінця значення `link` цей символ, але тільки в
// тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуємо конструкцію
// `if...else`.
// let link = 'https://my-site.com/about';

// const isLinkEndsWithSlash = link.endsWith('/');
// const hasMySiteText = link.includes('my-site');

// if (!isLinkEndsWithSlash && hasMySiteText) {
//     link += '/';
// }
// console.log(link);
//
//
//
// 7. Використовуємо тернарний оператор, колеги! Рефакторинг  
// коду задачі номер 4, використовуючи тернарний оператор.
// let link = 'https://my-site.com/about';
// const isLinkEndsWithSlash = link.endsWith('/');
// const hasMySiteText = link.includes('my-site');
// link = !isLinkEndsWithSlash && hasMySiteText ? link + '/' : link;
// // if (!isLinkEndsWithSlash && hasMySiteText) {
// //     link += '/';
// // }
// console.log(link);
//
//
//
// 8. Писатимемо скрипт який виводитиме в консоль браузера рядок залежно від
// значення змінної `hours`.
// Якщо значення змінної `hours`:
// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`
// const hours = 30;
// const isHoursLessThan17 = hours < 17;
// const isHoursBetween17And24 = hours >= 17 && hours <=24;
// const isHoursMoreThan24 = hours > 24;
// const userName = 'John';
// const age = userName === 'John' ? 24 : 5;
// if (hours < 17) {
//     console.log('Pending');
// } else if (hours >= 17 && hours <=24) {
//     console.log('Expires');
// } else {
//     console.log('Overdue');
// }
//
//
//
// 9. Писатимемо скрипт для відображення часу дедлайну здачі проекту. Використовуємо конструкцію `if...else`.
// - Якщо до дедлайну 0 днів - вивід `"Сьогодні"`
// - Якщо до дедлайну 1 день - вивід `"Завтра"`
// - Якщо до дедлайну 2 дні - вивід `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - вивід `"Дата у майбутньому"`
// const daysUntilDeadline = 5;
//
//
//
// 10. Виконаємо рефакторинг коду задачі номер 5 використовуючи `switch`.
// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//     case 0: {
//         console.log('Сьогодні');
//         break;
//     }
//     case 1: {
//         console.log('Завтра');
//         break;
//     }
//     case 2: {
//         console.log('Післязавтра');
//         break;
//     }
//     default: {
//         console.log('Дата у майбутньому');
//         // break;
//     }
// }



// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }
//
//
//
// 11. Будемо писати цикл for, який виводить у консоль браузера числа за зростанням від `min`
// до `max`, але тільки якщо число кратне `5`.
// const max = 98;
// const min = 19;
// for (let i = min; i<= max; i++) {
//     // if (i % 5 === 0) {
//     //     console.log(i);
//     // }
// }
// for(let i = 100; i >= 0; i--) {

// }






//
//
//
// 12. Писатимемо трішки складніший скрипт, який питатиме логін за допомогою `prompt` та логувати
// результат у консоль браузера.
// - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Хто ви? Я вас не знаю. До побачення."`
// Пароль перевіряти так:
// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Вітаю, пане!"`
// - Інакше виводити рядок `"Невірний пароль. Ви точно Адмін?? Бо в мене складаються певні підозри..."`


// if (!isAdminUser) {
//     alert('Хто ви? Я вас не знаю. До побачення.');
// } else {

// }


// const userName = prompt('Enter your name');
// const isAdminUser = userName === 'Admin';
// if (isAdminUser) {
//     const password = prompt('Enter your pwd');
//     const isValidAdminPassword = password === 'I am admin';
//     const outPut = isValidAdminPassword ? 'Welcome!' : 'Not welcome';
//     alert(outPut);
// } else {
//     alert('Хто ви? Я вас не знаю. До побачення.');
// }


// const userName = prompt('Enter your name');
// if (userName === 'Admin') {
//     const password = prompt('Enter your pwd');
//     if (password === 'I am admin') {
//         alert('Welcome!');
//     } else {
//         alert('Not welcome');
//     }
// } else {
//     alert('Хто ви? Я вас не знаю. До побачення.');
// }
























// let message = 'Hey John';
// const lowerCaseMessage = message.toLowerCase();
// const hasSpamInMessage = lowerCaseMessage.includes('spam'); // true / false

// const test1 = "";
// console.log(test1);
// console.log(!!test1);

// if (!hasSpamInMessage) {
//     // console.log("You're message has spam");
//     console.log("You're message does not have spam");
// } else {
//     console.log("You're message has spam");
//     // console.log("You're message does not have spam");
// }



// if ([0]) {
    
// } else {

// }



// let max = 0;
// for(let i = 0; i < 99; i++) {
//     max = i;
// }
// console.log(max);




