console.log('Executing index.js script...');

// const divElem = document.querySelector('div');
// divElem.addEventListener('click', (event) => {
//     console.log(event);
// })



// 0. Розглянемо приклад з конспекту щоб зрозуміти детальніше
// + stopPropagation() i stopImmediatePropagation()
//
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", (event) => {
//   console.log("Parent click handler");
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// child.addEventListener("click", (event) => {
//   console.log("Child click handler");
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// descendant.addEventListener("click", (event) => {
//   console.log("Grandchild click handler");
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// 
//
//
//
// 1. Будемо на базі нашої розмітки писати невеличке фортепіано.
// В нас є наперед готова функція яка викликає звук при нажатті на елемент.
// Нам потрібно організувати виклик цієї функції при нажатті на кожну окрему кнопку.
// Спочатку робимо надаючи слухач подій на кожну кнопку - потім переробляємо через 
// event delegation.
// const user = {
//     name: "Jake",
//     lastName: 'Jakeson'
// }
// const { name, lastName } = user;
// const users = ['Jake', 'John'];
// const [jakeUserName, johnUserName] = users;

// const [ piano ] = document.getElementsByClassName('piano');
// piano.addEventListener('click', (event) => {
//     const targetElem = event.target;
//     playNote(targetElem);
// });
// /**
//  * @param {Object} key - HTML елемент (клавіша) на яку було натиснуто
//  * @returns {void} - нічого не повертає, включаю звуковий ефект на кнопку
//  */
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
// 2. Покращимо наше фортепіано. Зробимо так щоб воно працювало при нажаття на клавішу в будь якій
// точні нашого веб-додатку.
// const keys = document.querySelectorAll('.key');
// document.addEventListener('keydown', (event) => {
//     [...keys].forEach((existingButtton) => {
//         const text = existingButtton.innerText;
//         const lowerCaseText = text.toLocaleLowerCase();
//         const eventCodeLower = (event.code[event.code.length - 1]).toLocaleLowerCase();
//         if (lowerCaseText === eventCodeLower) {
//             playNote(existingButtton);
//             return;
//         }
//     });
// });
// [1, 2, 3, 4, 5].forEach((item) => {
//     console.log(item, '===1');
//     if (item === 2) {
//         console.log(item, '===2');
//         
//     }
//     console.log(item, '===3');
// });
//
//
//
// 3. Наш товариш Jake зламав клавішу W на нашому фортепіано і вона більше не працює.
// Ми повинні зробити так щоб при натисканні на неї не було 
// жодного звуку а лише виводився лог що клавіша зламана. 
// Вспливання евенту повинне припинитись.
// const [ piano ] = document.getElementsByClassName('piano');
// piano.addEventListener('click', (event) => {
//     console.log(event);
//     const targetElem = event.target;
//     playNote(targetElem);
// });
// const wElem = document.getElementById('w-key-on-piano');
// wElem.addEventListener('click', (event) => {
//     console.log(event);
//     event.stopPropagation();
//     alert('Jake broken the button!');
// });
//
//
//
