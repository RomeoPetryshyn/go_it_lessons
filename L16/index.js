// 0.1 Що таке JSON? - текстовий формат зберігання і передачі структурованих даних у текстовій формі.
// 1. Local Storage
// 2. Session Storage
//
//
//
// 1. (JSON) Напишемо невеличкий скрипт який який обробляє інформацію про країні та виводить їх.
// у консоль в форматі `Country name: ${name}, capital: ${capital}, where: ${where}`, проте
// робить це лише для Європейських країн. Дані ми маємо у форматі stringified JSON.
// const countries = JSON.stringify([
//     { "name": "Ukraine", "capital": "Kyiv", "where": "Europe" },
//     { "name": "Germany", "capital": "Warsaw", "where": "Europe" },
//     { "name": "France", "capital": "Berlin", "where": "Europe" },
//     { "name": "Spain", "capital": "Paris", "where": "Europe" },
//     { "name": "Portugal", "capital": "Madrid", "where": "Europe" },
//     { "name": "Italy", "capital": "Lisbon", "where": "Europe" },
//     { "name": "Greece", "capital": "Rome", "where": "Europe" },
//     { "name": "United Kingdom", "capital": "Athens", "where": "Europe" },
//     { "name": "Canada", "capital": "Ottawa", "where": "America" },
//     { "name": "USA", "capital": "Washington", "where": "America" },
//     { "name": "Mexico", "capital": "Mexico", "where": "America" }
// ]);
// const parsedCountries = JSON.parse(countries);
// parsedCountries.forEach(({ name, capital, where }) => {
//     const countryStr = `Country name: ${name}, capital: ${capital}, where: ${where}`;
//     console.log(countryStr);
// });
//
//
//
// 2. (TRY/CATCH) Будемо писати невеличку функцію як буде приймати в себе stringified JSON, пробувати
// перетворити його на звичайний обєкт, а у випадку помилки - повертати рядок "Error occured"
// JSON.parse('I am Jake'); - SyntaxError
// const JSONParser = (inputJSON) => {
//     try {
//         return JSON.parse(inputJSON);
//     } catch(error) {
//         // console.error(error);
//         return "Error occured";
//     }
// }
// const JSONParser = (inputJSON) => {
//     let response = '';
//     try {
//         response = JSON.parse(inputJSON);
//     } catch(error) {
//         response = inputJSON;
//     }
//     return response;
// }
// console.log(JSONParser('{"name": "Jake"}'), 'Valid JSON');
// console.log(JSONParser("Just a string"), "String");
// console.log(JSONParser(undefined), "undefined");
// console.log(JSONParser(null), 'Null');
// console.log(JSONParser({name: "Jake"}, 'JS Object'));
//
//
//
// 3. На прикладі Session Storage розглянемо базові методи для запису, читання, зміни та видалення.
// Реалізуємо інпути користувача і при натисканні на кнопку submit - запишемо дані у память.
// function addSessionStorageItem() {
//     const inputElement = document.getElementById('add-key');
//     // const key = inputElement.value.split(':')[0];
//     // const value = inputElement.value.split(':')[1];
//     const [key, value] = inputElement.value.split(':');
//     if (!key || !value) {
//         console.error('Key OR Value not valid');
//         return;
//     }
//     // console.log(`key: ${key}, value: ${value}`);
//     sessionStorage.setItem(key, value);
//     console.log('Success!');
// }
// function readSessionStorageItem() {
//     const inputElement = document.getElementById('read-key');
//     const key = inputElement.value;
//     const sessionStorageElem = sessionStorage.getItem(key);
//     if (!sessionStorageElem) {
//         console.log('Element not found');
//         return;
//     }
//     console.log(sessionStorageElem);
// }
// function updateSessionStorageItem() {
//     const inputElement = document.getElementById('update-key');
//     const [key, value] = inputElement.value.split(':');
//     if (!key || !value) {
//         console.error('Key OR Value not valid');
//         return;
//     }
//     const sessionStorageElem = sessionStorage.getItem(key);
//     // Перевірка для краси
//     if (!sessionStorageElem) {
//         console.error('Element not found');
//         return;
//     }
//     // console.log(`key: ${key}, value: ${value}`);
//     sessionStorage.setItem(key, value);
//     console.log('Success!');
// }
// function deleteSessionStorageItem() {
//     const inputElement = document.getElementById('delete-key');
//     const key = inputElement.value;
//     const sessionStorageElem = sessionStorage.getItem(key);
//     // Перевірка для краси
//     if (!sessionStorageElem) {
//         console.error('Element not found');
//         return;
//     }
//     sessionStorage.removeItem(key);
//     console.log('Success (deleted)');
// }
// function clearSessionStorage() {
//     sessionStorage.clear();
// }
//
//
//
// 4. (Local Storage). Зреалізуємо спрощену модель кольорової схоми веб-додатку.
// За замовчуванням - при переході користувача на сторінку користувач повинен мати
// Світлу (Light) тему. Якщо користувач натискає на те щоб змінити тему - міняємо і
// записуємо її в пам'ять. При наступному відкриванні сторінки - тема повинна бути
// відновлена та використана, якщо запис знайдено у пам'яті. + кнопка очистки памяті
// const container = document.getElementsByClassName('container')[0];
// const [container] = document.getElementsByClassName('container');
// console.log(container);

// window.addEventListener("storage", (_) => {
//     const colorScheme = localStorage.getItem('colorScheme');
//     handleColorScheme(colorScheme);
// });

// (function onColorSchemeLoad() {
//     const colorScheme = localStorage.getItem('colorScheme');
//     handleColorScheme(colorScheme);
// })();

// function setColorTheme(colorScheme = 'light') {
//     localStorage.setItem('colorScheme', colorScheme);
//     handleColorScheme(colorScheme);
//     window.dispatchEvent( new Event('storage') );
// }

// function clearColorThemeSelection() {
//     localStorage.removeItem('colorScheme');
//     handleColorScheme();
//     window.dispatchEvent( new Event('storage') );
// }

// function handleColorScheme (colorScheme) {
//     const validColorScheme = colorScheme && ['light', 'dark'].includes(colorScheme) 
//         ? colorScheme
//         : 'light';
//     if (validColorScheme === 'light') {
//         container.style.backgroundColor = 'white';
//         container.style.color = 'black';
//     } 
//     if (validColorScheme === 'dark') {
//         container.style.backgroundColor = 'black';
//         container.style.color = 'white';
//     }
// }
//
//
//


