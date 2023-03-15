console.log('Executing index.js script...');

// 1.  Назва                  Шукає по:         Повертає живу колекцію
//     getElementsByTagName	  tag or '*'		✔
//     getElementsByClassName class             ✔
//     getElementById         id                -
//     querySelectorAll       CSS-selector      -
//     querySelector          CSS-selector      -
// const li1 = document.querySelector('.lesson11_container_content_list_item');
// const allLi = document.querySelectorAll('.lesson11_container_content_list_item');
// const listTitle = document.getElementById('lesson11_container_content_title');
// const li2 = document.getElementsByClassName('lesson11_container_content_list_item');
// const h2 = document.getElementsByTagName('h2');
// console.log({ li1, allLi, listTitle, li2, h2 });
//
//
//
// 2.
// createElement(tagName, options) - створює елемент
// element.append(childElement) - додає елементИ в кінець списку елементів
// element.prepend(childElement) - додає елементИ в початок списку елементів
// let div = document.createElement("div");
// let p = document.createElement("p");
// let span = document.createElement("span");
// div.append(p);
// div.prepend(span);
// console.log(div.childNodes); // NodeList [ <span>, <p> ]
//
//
//
// 3.
// element.appendChild(childElement) - додає ОДИН елемент в кінець списку елементів
// element.prependChild(childElement) - додає ОДИН елемент в кінець списку елементів
// // listItem1
// const newLi1 = document.createElement("li");
// const text1 = document.createTextNode("5");
// newLi1.appendChild(text1);
// // listItem2
// const newLi2 = document.createElement("li");
// const text2 = document.createTextNode("6");
// newLi2.appendChild(text2);
// // listItem3
// const newLi3 = document.createElement("li");
// const text3 = document.createTextNode("7");
// newLi3.appendChild(text3);
// const ul = document.getElementsByClassName("lesson11_container_content_list")[0];
// ul.append(newLi1, newLi2, newLi3);
//
//
//
// 4.
// classList.add(token0, token1, /* … ,*/ tokenN) - додаємо css класи
// classList.remove(token0, token1, /* … ,*/ tokenN) - видаляємо css класи
// const h2 = document.getElementById('lesson11_container_content_title');
// h2.classList.add('red_text');
// h2.classList.remove('red_text');
// h2.classList.add('green_text');
// h2.classList.remove('green_text');
// h2.classList.toggle('yellow_text');
// h2.classList.toggle('yellow_text');
// h2.style.color = 'red';
//
//
//
// 5. insertAdjacentHTML()розбирає вказаний текст як HTML і вставляє отримані вузли
// <!-- beforebegin -->
// <p>
// <!-- afterbegin -->
// Jake
// <!-- beforeend -->
// </p>
// <!-- afterend -->
// let markup = '';
// for (let i = 5; i<= 10; i++) {
//     markup += `<li>${i}</li>`;
// }
// const ul = document.getElementsByClassName('lesson11_container_content_list')[0];
// ul.insertAdjacentHTML('beforeend', markup);
//
//
//
// 6. Будемо писати функціонал для пошуку автомобіля
// Будемо мати два інпути - для марки, для максимальної вартості автівки та для типу.
// Всі знайдені автівки будемо виводити для користувача, якщо нічого не знайдено - виводимо Nothing found
// const cars = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045,},
//     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//     { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 }
//     { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 }
//     { make: 'Chevrolet', model: 'Cruze', type: 'sedan', price: 14000 }
// ];
// <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2018_Volvo_XC90_Inscription_D5_PowerPulse_AWD_2.0.jpg/1200px-2018_Volvo_XC90_Inscription_D5_PowerPulse_AWD_2.0.jpg" alt="">
//
// function listFoundCars() {
//     const carPriceInput = document.getElementById('car_price_input');
//     const carMakeInput = document.getElementById('car_make_input');
//     const carTypeInput = document.getElementById('car_type_input');
//     console.log({ carPriceInput, carMakeInput, carTypeInput });
    
//     const carPrice = Number(carPriceInput.value);
//     const carMake = carMakeInput.value;
//     const carType = carTypeInput.value;
//     console.log({ carPrice, carMake, carType });
// }

