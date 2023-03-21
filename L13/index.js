console.log('Executing index.js script...');

// 0. Розглянемо приклад з конспекту щоб зрозуміти детальніше
// + stopPropagation() i stopImmediatePropagation()
//
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
//   console.log("Parent click handler");
// });
// child.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
//   console.log("Child click handler");
// });
// descendant.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
//   console.log("Descendant click handler");
// });
// 
//
//
//
// 1. Будемо на базі нашої розмітки писати невеличке фортепіано.
// В нас є наперед готова функція яка викликає звук при нажатті на елемент.
// Нам потрібно організувати виклик цієї функції при нажатті на кожну окрему кнопку.
// Спочатку робимо надаючу слухач подій на кожну кнопку - потім переробляємо через 
// event delegation.
/**
 * @param {Object} key - HTML елемент (клавіша) на яку було натиснуто
 * @returns {void} - нічого не повертає, включаю звуковий ефект на кнопку
 */
let playNote = (key) => {
    console.dir(key);
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    });
}
//
//
//
// 2. Покращемо наше фортепіано. Зробимо так щоб воно працювало при нажаття на клавішу в будь якій
// точні нашого веб-додатку.
// const keys = document.querySelectorAll('.key');
// const regulars = document.querySelectorAll('.key.white');
// const sharps = document.querySelectorAll('.key.black');
// const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
// const blacks = ['w', 'e', 'r', 't', 'y'];
// document.addEventListener('keydown', e => {
//     // playNote(regulars[whiteKeyIndex]) - access white keys
//     // playNote(sharps[blackKeyIndex]) - access black keys
// });
//
//
//
// 3. Наш товариш Jake зламав клавішу W на нашому фортепіано і вона більше не працює.
// Ми повинні зробити так щоб при натисканні на неї не було 
// жодного звуку а лише виводився лог що клавіша зламана. 
// Вспливання евенту повинне припинитись.
//
//
//
// 4. Будемо намагатись ловити наші евенти при натисканні по рівню вкладеності
// grandpa, father, son, dog, cat. Спробую всю інформацію скласти і вивести у консоль
//
//
//
