console.log('Executing index.js script...');
// 1.  Назва                  Шукає по:         Повертає живу колекцію
//     getElementsByTagName	  tag        		✔
//     getElementsByClassName class             ✔
//     getElementById         id                -
//     querySelectorAll       CSS-selector      -
//     querySelector          CSS-selector      -
// const li1 = document.querySelector('.lesson11_container_content_list_item');
// const allLi = document.querySelectorAll('.lesson11_container_content_list_item');
// const listTitle = document.getElementById('lesson11_container_content_title');
// const listTitle2 = document.querySelector('#lesson11_container_content_title');
// console.log({ listTitle, listTitle2 });
// const li2 = document.getElementsByClassName('lesson11_container_content_list_item');
// const li3 = document.querySelectorAll('.lesson11_container_content_list_item');
// const h2 = document.getElementsByTagName('h2');
// console.log(h2);
// console.log({ li1, allLi, listTitle, li2, h2 });
// const elem = document.getElementById('lesson11_container_content_title');
// console.log(elem);
// const elem2 = document.getElementById('lesson11_container_content_title');
// elem2.innerHTML = '<div>some text</div>';
// console.log({ elem, elem2 });
// console.log(elem);
// const elems = document.getElementsByClassName('lesson11_container_content_list_item');
//
//
//
// 2.
// createElement(tagName, options) - створює елемент
// element.append(childElement1, childElement2) - додає елементИ в кінець списку елементів
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
// element.prependChild(childElement) - додає ОДИН елемент на початок списку елементів
// listItem1
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
// toggle(className) 
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
// 5. insertAdjacentHTML() розбирає вказаний текст як HTML і вставляє отримані вузли
// <!-- beforebegin -->
// <p>
// <!-- afterbegin -->
// Jake
// <!-- beforeend -->
// </p>
// <!-- afterend -->
// let markup = '';
// for (let i = 5; i<= 1000; i++) {
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
const cars = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045,},
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
    { make: 'Chevrolet', model: 'Cruze', type: 'sedan', price: 14000 }
];
const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2018_Volvo_XC90_Inscription_D5_PowerPulse_AWD_2.0.jpg/1200px-2018_Volvo_XC90_Inscription_D5_PowerPulse_AWD_2.0.jpg';
function listFoundCars() {
    const carPriceInput = document.getElementById('car_price_input').value;
    const carMakeInput = document.getElementById('car_make_input').value;
    const carTypeInput = document.getElementById('car_type_input').value;
    
    const carPrice = carPriceInput ? Number(carPriceInput) : null;
    const carMake = carMakeInput ? carMakeInput : null;
    const carType = carTypeInput ? carTypeInput : null;

    const filteredCars = cars.reduce((accumulator, car) => {
        const { price, make, type } = car;
        if (carPrice && carPrice < price) {
            console.log('Price is higher', car);
            return accumulator;
        }
        if (carMake && carMake !== make ) {
            console.log('Car make is different', car);
            return accumulator;
        }
        if (carType && carType !== type) {
            console.log('Car type is different', car);
            return accumulator;
        }
        console.log('MATCH!', car);
        accumulator.push(car);
        return accumulator;
    }, []);
    console.log(filteredCars);

    let markup = '';
    // make: 'Honda', model: 'CR-V', type: 'suv', price: 24045
    filteredCars.forEach((car) => {
        markup += `
        <ul>
            <li>make:${car.make}</li>
            <li>model:${car.model}</li>
            <li>type:${car.type}</li>
            <li>price:${car.price}</li>
            <li><img style="width: 100px; height: 100px;" src="${imgSrc}"></li>
        </ul>
        `;
    });
    console.log(markup);

    const container = document.querySelector('.lesson11_container');
    console.log(container);
    container.insertAdjacentHTML('beforeend', markup);
}

