//
//
// 0.1 Розглянемо структуру url
// https://github.com/userName?tab=repositories
// https:// - протокол
// github.com - хост
// userName - шлях
// ?tab=repositories - параметри
//
// const searchParams = new URLSearchParams({
//     limit: 5,
//     offset: 0,
// });
// console.log(searchParams.toString()); // "limit=5&offset=0"
//
//
//
// fetch('http://localhost:3000/products', {
//     method: "PUT",
//     // body: JSON.stringify(data)
// }).then(response => {
//     console.log(response);
//     if (response.ok) {
//         return console.log('OK');
//     }
//     console.log('NOT OK');
// }).catch(error => {
//     console.log('ERROR');
//     console.error(error);
// }); // OUTPUT => NOT OK
//
//
//
// 1. Розглянемо роботу з Postman на прикладі нашого невеличкого бек-енду.
// Спробуємо використати limit та offset при завантаження.
//
//
//
// 2. Розглянемо роботу з OpenAPI Swagger на прикладі невеличкого
// публічного API https://catfact.ninja/#/Facts/getRandomFact
//
//
//
// 3. Напишемо код на базі того що ми робили в Postman. Будемо завантажувати 
// дані 5 продуктів і при натисканні на кнопку - будемо завантажувати додаткові 5 і так до кінця.
// Інформацію про продукти будемо виводити на сторінку.

// let offset = 0;

// (function initialLoad() {
//     loadData(5, 0)
//         .then(response => response.json())
//         .then(data => {
//             updateHTML(data);
//         })
// })();

// function loadMore() {
//     offset += 5;
//     loadData(5, offset)
//         .then(response => response.json())
//         .then(data => {
//             updateHTML(data);
//         })
// }

// function loadData(reqLimit, reqOffset) {
//     const searchParams = new URLSearchParams({limit: reqLimit, offset: reqOffset});
//     const urlParameters = searchParams.toString();
//     return fetch(`http://localhost:3000/products?${urlParameters}`);
// }

// function updateHTML(data) {
//     const [container] = document.getElementsByClassName('container');
//     const markup = data.reduce((accumulator, dataItem) => {
//         const dataItemMarkup = buildProductMarkup(dataItem);
//         return accumulator += dataItemMarkup;
//     }, '');
//     container.insertAdjacentHTML('beforeend', markup);
// }

// function buildProductMarkup({ type, name, price, priceBeforeDiscount, stars, index }) {
//     return `
//         <div>
//             <span style="padding-right: 10px">index: ${index}</span>
//             <span style="padding-right: 10px">name: ${name}</span>
//             <span style="padding-right: 10px">type: ${type}</span>
//             <span style="padding-right: 10px">price: ${price}</span>
//             <span style="padding-right: 10px">priceBeforeDiscount: ${priceBeforeDiscount}</span>
//             <span style="padding-right: 10px">stars: ${stars}</span>
//         </div>
//     `;
// }
//
//
//
// 4. Удосконалимо попередню імплементацію і додамо по-сторінкове завантаження наших продуктів.
// Реалізуваємо кнопки "Попередня сторінка" та "Наступна сторінка" для виводу даних.

// Global variables;
let offset = 0;
const limit = 5;

// #6 Function to load initial (FIRST) 5 elements
// This function is updateHTML function to update HTML markup
(function initialLoad() {
    loadData(limit, offset)
        // transforming Response into js object
        .then(response => response.json())
        // getting data and sending it to updateHTML Function
        .then(data => {
            updateHTML(data);
        });
})();

// #7 Function to go to previous page
function previousPage() {
    // reducing offset (5)
    offset -= 5;
    // loading data with new offset
    loadData(limit, offset)
        .then(response => response.json())
        .then(data => {
            // getting data and sending it to updateHTML Function
            updateHTML(data);
        });
}

// #8 Function to go to next page
function nextPage() {
    // adding 5 offset
    offset += 5;
    // loading data with new offset
    loadData(limit, offset)
        .then(response => response.json())
        .then(data => {
            // getting data and sending it to updateHTML Function
            updateHTML(data);
        });
}

// #1 - Function to return PROMISE (data fetch);
function loadData(reqLimit, reqOffset) {
    // building request parameters
    const searchParams = new URLSearchParams({limit: reqLimit, offset: reqOffset});
    const urlParameters = searchParams.toString(); // offset=NUMBER&limit=NUMBER
    // returning promise to fetch data
    return fetch(`http://localhost:3000/products?${urlParameters}`);
}

// #2 - Function to update actual HTML
function updateHTML(data) {
    // getting container div element
    const [container] = document.getElementsByClassName('container');
    // preparing HTML markup
    const markup = data.reduce((accumulator, dataItem) => {
        const dataItemMarkup = buildProductMarkup(dataItem);
        return accumulator += dataItemMarkup;
    }, ''); // <div>...<span>ELEMENT INFORMATION</span>...</div>
    // adding HTML into the container
    container.innerHTML = markup;


    // getting element (span) which is showing current page
    const pageElement = document.querySelector('#current-page-element');
    // showing current page inside element HTML
    pageElement.innerHTML = `${(limit+offset)/limit}`;

    // Checking if offset is >= 15 - disabling button to go to next page
    if (offset >= 15) {
        disableButton('next-page-button');
    } else { // in other case - enabling next page button
        enableButton('next-page-button');
    }
    // Checking if offset is <= 0 - disabling button to go to previous page
    if (offset <= 0) {
        disableButton('previous-page-button');
    } else { // in other case - enabling next previous button
        enableButton('previous-page-button');
    }
}

// #3 Function to disable button by id
function disableButton(buttonId) {
    // getting button HTML element
    const button = document.getElementById(buttonId);
    // setting it as disabled
    button.disabled = true;
}

// #4 Function to enable button by id
function enableButton(buttonId) {
    // getting button HTML element
    const button = document.getElementById(buttonId);
    // setting it as enabled
    button.disabled = false;
}

// #5 Function to build HTML Markup for ONE PRODUCT  *this function is PURE FUNCTION
function buildProductMarkup({ type, name, price, priceBeforeDiscount, stars, index }) {
    // returning HTML markup as JS String
    return `
        <div>
            <span style="padding-right: 10px">index: ${index}</span>
            <span style="padding-right: 10px">name: ${name}</span>
            <span style="padding-right: 10px">type: ${type}</span>
            <span style="padding-right: 10px">price: ${price}</span>
            <span style="padding-right: 10px">priceBeforeDiscount: ${priceBeforeDiscount}</span>
            <span style="padding-right: 10px">stars: ${stars}</span>
        </div>
    `;
}
//
//
//
// HOW TO RUN ORGANIC_SVC BACK-END
// 1. Open Terminal is VS code
// 2. Go out from current directory and go to organic-svc directory
// USE: cd organic-svc/
// 3. npm install - to install node modules (packages)
// 4. npm start - to start the project
// As a result - back-end is working under http://localhost:3000/products
//
//
//