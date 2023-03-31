// 0.1 Що таке JSON? - текстовий формат зберігання і передачі структурованих даних у текстовій формі.
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
//
//
//
// 2. (TRY/CATCH) Будемо писати невеличку функцію як буде приймати в себе stringified JSON, пробувати
// перетворити його на звичайний масив даних, а у випадку помилки - повертати рядок "Error occured"
// const JSONParser = (inputJSON) => {}
// console.log(JSONParser('{"name": "Jake"}'));
// console.log(JSONParser("Just a string"));
// console.log(JSONParser(undefined));
// console.log(JSONParser(null));
// console.log(JSONParser({name: "Jake"}));
//
//
//
// 3. На прикладі Session Storage розглянемо базові методи для запису, читання, зміни та видалення.
// Реалізуємо інпути користувача і при натисканні на кнопку submit - запишемо дані у память.
// function addSessionStorageItem() {}
// function readSessionStorageItem() {}
// function updateSessionStorageItem() {}
// function deleteSessionStorageItem() {}
//
//
//
// 4. (Local Storage). Зреалізуємо спрощену модель кольорової схоми веб-додатку.
// За замовчуванням - при переході користувача на сторінку користувач повинен мати
// Світлу (Light) тему. Якщо користувач натискає на те щоб змінити тему - міняємо і
// записуємо її в пам'ять. При наступному відкриванні сторінки - тема повинна бути
// відновлена та використана, якщо запис знайдено у пам'яті. + кнопка очистки памяті
// const [container] = document.getElementsByClassName('container');
// console.log(container);
// (function onColorSchemeLoad() {})();
// function setColorTheme(colorScheme = 'light') {}
// function clearColorThemeSelection() {}
// function handleColorScheme (colorScheme = 'light') {
//     if (colorScheme === 'light') {
//         container.style.backgroundColor = 'white';
//         container.style.color = 'black';
//     } 
//     if (colorScheme === 'dark') {
//         container.style.backgroundColor = 'black';
//         container.style.color = 'white';
//     }
// }
//
//
//


