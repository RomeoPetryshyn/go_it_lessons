console.log('Executing index.js script...');

// const child = document.getElementById('child');
// console.dir(child);
// const form = document.querySelector(".register-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(event);
//     const usernameInput = event.target.children[0].value;
//     const passwordInput = event.target.children[1].value;
//     console.log({ usernameInput, passwordInput });
// //   event.preventDefault();
// //   const {
// //     elements: { username, password }
// //   } = event.currentTarget;
// //   console.log(username.value, password.value);
// }); 
// document.addEventListener('keydown', (_event) => {
//     console.log(_event);
// });
//
//
//
// 1. 
// addEventListener(type, listener) - додаємо слухач подій
// target.removeEventListener(type, listener) - видаляємо слухач подій
// Будемо рухати кубик по сторінці при нажатті на нього
// const box = document.querySelector('.box');
// box.addEventListener('click', onClick);
// let step = 0;
// function onClick(event) {
//     console.dir(event);
//     step += 50;
//     event.target.style.marginLeft = step + 'px';
//     if (step >= 300) {
//         removeBoxClickListener();
//     }
// }
// function removeBoxClickListener() {
//     box.removeEventListener('click', onClick);
// }
//
//
//
// 2. Будемо виводити текст при нажатті на кнопку і робити кнопку неактивною після того
// const button = document.getElementById('show-greeting');
// const divBlock = document.getElementsByClassName('js-greeting')[0];
// button.addEventListener('click', (event) => {
//     divBlock.style.display = 'block';
//     console.log(event);
//     event.target.disabled = true;
// });
//
//
//
// 3.
// Напишемо чотири кнопки стрілочок. За допомогою тих кнопок будемо рухати наш кубик по сторінці
// const arrows = document.querySelectorAll('.arr');
// const box = document.querySelector('.box');
// const [arrowUp, arrowLeft, arrowBottom, arrowRight] = arrows;
// let topCounter = 0;
// let leftCounter = 0;
// let bottomCounter = 0;
// let rightCounter = 0;
// arrowUp.addEventListener('click', (event) => {
//     topCounter += 20;
//     box.style.marginTop = `${topCounter}px`;
// });
// arrowLeft.addEventListener('click', (event) => {
//     leftCounter += 20;
//     box.style.marginLeft = `${leftCounter}px`;
// });
// arrowBottom.addEventListener('click', (event) => {
//     bottomCounter += 20;
//     box.style.marginBottom = `${bottomCounter}px`;
// });
// arrowRight.addEventListener('click', (event) => {
//     rightCounter += 20;
//     box.style.marginRight = `${rightCounter}px`;
// });
//
//
//
// 4. Будемо рухати наш бокс натисканням на кнопки клавіатури
// const [box] = document.getElementsByTagName('div');
// // const box = document.getElementsByTagName('div')[0];
// // const box = document.querySelector('div');
// // const box = document.querySelectorAll('div')[0];
// console.dir(box);
// let topCounter = 0;
// let leftCounter = 0;
// let bottomCounter = 0;
// let rightCounter = 0;
// document.addEventListener('keydown', (_event) => {
//     console.log({ code: _event.code, key: _event.key, event: _event });
//     if (_event.code === 'ArrowUp') {
//         topCounter += 20;
//         box.style.paddingTop = `${topCounter}px`;
//         box.classList.toggle('yellow-box');
//     }
//     if (_event.code === 'ArrowRight') {
//         leftCounter += 20;
//         box.style.paddingLeft = `${leftCounter}px`;
//         box.classList.toggle('yellow-box');
//     }
//     if (_event.code === 'ArrowDown') {
//         bottomCounter += 20;
//         box.style.paddingBottom = `${bottomCounter}px`;
//         box.classList.toggle('yellow-box');
//     }
//     if (_event.code === 'ArrowLeft') {
//         rightCounter += 20;
//         box.style.paddingRight = `${rightCounter}px`;
//         box.classList.toggle('yellow-box');
//     }
// });
//
//
//




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5. Будемо писати динамічний пошук країн
// const countries = [
//     { name: 'Ukraine', capital: 'Kyiv', squareKM: 603700000000, where: 'Europe' },
//     { name: 'Poland', capital: 'Warsaw', squareKM: 322575, where: 'Europe' },
//     { name: 'Germany', capital: 'Berlin', squareKM: 357588, where: 'Europe' },
//     { name: 'France', capital: 'Paris', squareKM: 551695, where: 'Europe' },
//     { name: 'Spain', capital: 'Madrid', squareKM: 505990, where: 'Europe' },
//     { name: 'Portugal', capital: 'Lisbon', squareKM: 92212, where: 'Europe' },
//     { name: 'Italy', capital: 'Rome', squareKM: 302073, where: 'Europe' },
//     { name: 'Greece', capital: 'Athens', squareKM: 131957, where: 'Europe' },
//     { name: 'United Kingdom', capital: 'Athens', squareKM: 243610, where: 'Europe' },
//     { name: 'Canada', capital: 'Ottawa', squareKM: 9985000, where: 'America' },
//     { name: 'USA', capital: 'Washington', squareKM: 9834000, where: 'America' },
//     { name: 'Mexico', capital: 'Mexico', squareKM: 1973000, where: 'America' },
// ];

// const [countryNameInput, counryWhereInput, countrySquareInput] = document.getElementsByTagName('input')

// let markup = '';

// countryNameInput.addEventListener('input', (_event) => {
//     const inputCountryName = _event.target.value;
//     const foundCountry = countries.find((existingCountry) => {
//         return existingCountry.name === inputCountryName;
//     });
//     const container = document.getElementById('countries-list');
//     if (foundCountry) {
//         markup = buildCountryMarkup(foundCountry);;
//         container.insertAdjacentHTML('beforeend', markup);
//     } else {
//         markup = '';
//         container.innerHTML = '';
//     }
// });

// counryWhereInput.addEventListener('input', (_event) => {
//     const inputCountryWhere = _event.target.value;
//     const foundCountries = countries.filter((existingCountry) => {
//         return existingCountry.where === inputCountryWhere;
//     });
//     const container = document.getElementById('countries-list');
//     if (foundCountries.length > 0) {
//         markup = '';
//         foundCountries.forEach((foundCountry) => {
//             markup += buildCountryMarkup(foundCountry);;
//         });
//         container.insertAdjacentHTML('beforeend', markup);
//     } else {
//         markup = '';
//         container.innerHTML = '';
//     }
// });

// countrySquareInput.addEventListener('input', (_event) => {
//     const inputSquareKM = _event.target.value ? Number(_event.target.value) : null;
//     const foundCountries = countries.reduce((acc, existingCountry) => {
//         if (inputSquareKM < existingCountry.squareKM) {
//             acc.push(existingCountry);
//         }
//         return acc;
//     }, []);
//     const container = document.getElementById('countries-list');
//     if (foundCountries.length > 0) {
//         markup = '';
//         foundCountries.forEach((foundCountry) => {
//             markup += buildCountryMarkup(foundCountry);
//         });
//         container.innerHTML = markup;
//     } else {
//         markup = '';
//         container.innerHTML = '';
//     }
// });

// const buildCountryMarkup = (country) => `
//     <ul>
//         <li>name:${country.name}</li>
//         <li>capital:${country.capital}</li>
//         <li>squareKM:${country.squareKM}</li>
//         <li>where:${country.where}</li>
//     </ul>
// `;
