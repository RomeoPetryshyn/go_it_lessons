console.log('Executing script');
//
//
//
// 0.1 Обговоримо що таке REST і як відбувається комунікація з сервером в сучасних веб додатках
//
//
//
// 0.2 Обговоримо базові методи запитів на сервер CRUD:
// C - Create (створити) [POST]
// R - Read (дістати, прочитати) [GET]
// U - Update (оновити) [PUT, PATCH]
// D - Delete (видалити) [DELETE]
//
//
//
// 1. Будемо писати додаток який показує погоду в різних містах світу.
// Дані буде завантажувати з публічного API openweathermap.
function refreshWeather() {
    // список міст з ідентифікаторами
    const cities = [
        { name: 'London', id: '2643743' },
        { name: 'Kyiv', id: '703448' },
        { name: 'Paris', id: '2988507' },
        { name: 'Madrid', id: '3117735' },
        { name: 'New York', id: '5128581' },
        { name: 'Amsterdam', id: '2759794' },
        { name: 'Lviv', id: '702550' },
        { name: 'Berlin', id: '2950159' },
        { name: 'Tokyo', id: '1850144' },
        { name: 'Pekin', id: '1816670' },
        { name: 'Rome', id: '3169070' },
    ];

    // // Preparing array of promises
    // // Returned Array of {fetchPromise: Promise, name: string}
    // const promisesArray = cities.map(( {name, id} ) => {
    //     const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=2a531d782bae853d10ea3c01caa5bb3c`;
    //     return fetch(url);
    // });
    // // Using promiseAll - handling array of promises
    // Promise.all(promisesArray).then((responses) => {
    //     // as a result - we are getting array of Responses
    //     // where body is ReadableStream which we need to handle
    //     // response.json() - returns Promise. Handling those promises
    //     // using Promise.all
    //     const jsonPromises = responses.map(response => response.json());
    //     Promise.all(jsonPromises).then((data) => {
    //         // showing data on HTML
    //         console.log(data);
    //     });
    // });
    // Promise.all(promisesArray).then((responses) => {
    //     Promise.all(responses.map(response => response.json())).then((dataSets) => {
    //         dataSets.forEach(data => {
    //             const celciusTemperature = data?.main?.temp - 273.15;
    //             const weatherIcon = data?.weather[0]?.icon;
    //             const cityElement = document.getElementById(name);
    //         });
    //     })
    // })

    // response.json(); // RETURNS PROMISE

    // cities.forEach(({id, name}) => {
    //     const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=2a531d782bae853d10ea3c01caa5bb3c`;
    //     fetch(url)
    //         .then(response => {
    //             // console.log(response);
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log({ data });
    //             const celciusTemperature = data?.main?.temp - 273.15;
    //             const cityElement = document.getElementById(name);
    //             const weatherIcon = data?.weather[0]?.icon;
    //             cityElement.innerHTML = `
    //                ${Math.round(celciusTemperature)}&deg;C <img src = "http://openweathermap.org/img/wn/${weatherIcon}.png">
    //             `;
    //         });
    // });
}
//
//
//
// 2. В нас є продуктовий інтернет магазин. Є невеличкий написаний бек-енд який
// повертатиме нам список продуктів для цього магазину.
// При завантаженні сторінки ми показуватимемо лише продукти які йдуть зі знижкою.
// Також у нас буде реалізована кнопка ЗАВАНТАЖИТИ ВСІ при натисканні на яку
// нам потрібно показувати всі продукти які є (включно з тими які без знижки).
// Посилання на наше API: http://localhost:3000/products?loadAll=true

// function initialLoad() {
//     loadData(false);
// }
// initialLoad();
// =
// (function initialLoad() {
//     loadData(false);
// })();
// function loadData(loadAll) {
//     const url = `http://localhost:3000/products?loadAll=${loadAll}`;
//     fetch(url).then(response => response.json()).then((data) => {
//         const markup = data.map((data) => {
//             return buildMarkup(data);
//         }).join('');
//         const elem = document.getElementById('products_container');
//         elem.innerHTML = markup;
//     });
// }
// fetch('http://localhost:3000/products', {
//     method: "POST",
//     // body: JSON.stringify(data)
// }).then(response => response.json()).then(data => console.log(data));
// fetch('http://localhost:3000/products', {
//     method: "DELETE"
// }).then(response => response.json()).then(data => console.log(data));
// fetch('http://localhost:3000/products', {
//     method: "PUT",
//     // body: JSON.stringify(data)
// }).then(response => response.json()).then(data => console.log(data));
// function buildMarkup ({name, price, priceBeforeDiscount, type}) {
//     return `
//         <div>name: ${name}, price: ${price}, type: ${type}, priceBeforeDiscount: ${priceBeforeDiscount}</div>
//     `;
// }
//
//
//
// 3. До попереднього додатку завантаження списку продуктів спробуємо реалізувати
// Обробку помилок. Будемо модифікувати наш бек-енд щоб він нам відправляв різні помилки
// і ми на їх основі виводили користувачу якийсь результат.
// fetch('http://localhost:3000/products', {
//     method: "POST",
//     // body: JSON.stringify(data)
// }).then(response => {
//     console.log(response);
//     return response.json()
// }).then(data => console.log(data));
//
//
//