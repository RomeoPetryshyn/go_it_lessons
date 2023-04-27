//
//
//
// 0.1 Обговоримо базові методи запитів на сервер CRUD:
// C - Create (створити) [POST]
// R - Read (дістати, прочитати) [GET]
// U - Update (оновити) [PUT, PATCH]
// D - Delete (видалити) [DELETE]
//
//
//
// 0.2 Розглянемо яким чином ми виконуємо базові CRUD запити на наш маленький бек-енд
// Зробимо 4 види запитів і швиденько розглянемо яким чином бек-енд отримає ці дані.
// const data = {
//     // name: 'Jake',
//     age: 35
// };
// const params = (new URLSearchParams({where: 'in-organic-svc-db', id: 'jake-user-id'})).toString();
// fetch(`http://localhost:3000/products?${params}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//     // body: JSON.stringify(data)
// }).then(response => {
//     console.log({response});
//     return response.json();
// }).then(resData => {
//     console.log({resData});
// });
// fetch(`http://localhost:3000/products`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     // body: JSON.stringify(data)
// }).then(response => {
//     console.log({response});
//     return response.json();
// }).then(resData => {
//     console.log({resData});
// });
//
//
//
// УВАГА: при тестуванні CRUD операцій ми використовуємо FAKE API. Вона створена для тестування
// та в навчальних цілях і тому не дозволить нам вносити реальні зміни до бази даних, проте
// дасть нам можливість випробувати користування справжніми CRUD ендпоінтами в нашому скрипті.
//
// 0.3
// Для тестування CRUD операцій будемо використовувати тестову API jsonplaceholder.
// За допомогою Postman розглянемо принцип її робити щоб отримати розуміння яким чином нам
// працювати з нею в коді.
// https://jsonplaceholder.typicode.com/users

// Path Parameters
// "/cars/:id" // model
// "/cars/8" // getting data for car with id 8 

// // Query Parameters
// "/cars" // model
// "/cars?id=8" // getting data for car with id 8

//
//
// 1. POST
// Зробимо запит на створення сутності з даними нашого користовувача Jake.
// const data = {
//     name: "Jake Jackson 100",
//     username: "jakee",
//     email: "jakee@test.com",
//     phone: 7770077707,
//     company: {
//         name: "Jake INC"
//     }
// };
// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
// }).then(response => {
//     console.log({response});
//     return response.json();
// }).then(resData => {
//     console.log({resData});
// });
//
//
//
// 2. GET
// Отримаємо дані про користувача по його ID. Також отримаємо дані всіх користувачів одразу
// Будемо виводити ці дані на сторінку для користувача.
fetch('https://jsonplaceholder.typicode.com/products', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
}).then(response => {
    console.log({response});
    return response.json();
}).then(resData => {
    console.log(resData);
    const [container] = document.getElementsByClassName('container');
    const markup = (resData.map(buildItemMarkup)).join('');
    container.innerHTML = markup;
});

function getDataForItem() {
    const inputElem = document.getElementById('user-id-input');
    const userId = Number(inputElem.value);
    fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        console.log({response});
        return response.json();
    }).then(resData => {
        console.log(resData);
        const [dataElem] = resData;
        const [container] = document.getElementsByClassName('container');
        const markup = buildItemMarkup(dataElem);
        container.innerHTML = markup;
    });
}

function buildItemMarkup ({ name, email, phone, website }) {
    const phoneForMarkup = phone ?? 'No phone number';
    const emailForMarkup = email ?? 'No phone number';
    const nameForMarkup = name ?? 'No phone number';
    const websiteForMarkup = website ?? 'No phone number';
    return `
        <div>
            <span>name: ${nameForMarkup} </span>
            <span>email: ${emailForMarkup} </span>
            <span>phone: ${phoneForMarkup} </span>
            <span>website: ${websiteForMarkup} </span>
        </div>
    `;
};

// "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//
//
//
// 3. PUT/PATCH
// Оновимо дані одного з користувачів по його ID. Спробуємо повністю оновити всі дані сутності
// а також оновити окремі поля. Використовуємо PUT для повного оновлення і PATCH для часткового.
// function updateDataForItem() {
//     console.log('executed');
//     // const inputElem = document.getElementById('user-id-input');
//     // const [container] = document.getElementsByClassName('container');

//     const name = (document.getElementById('user-name-input')).value;
//     const email = (document.getElementById('user-email-input')).value;
//     const phone = (document.getElementById('user-phone-input')).value;
//     const userId = (document.getElementById('user-id-input')).value;

//     const [container] = document.getElementsByClassName('container');
//     if (!userId) {
//         container.innerHTML = 'No user ID entered';
//         return;
//     }
//     if (!name && !email && !phone) {
//         container.innerHTML = 'Nothing entered';
//         return;
//     }

//     // const inputData = [
//     //     {key: 'name', value: name}, 
//     //     {key: 'email', value: email}, 
//     //     {key: 'phone', value: phone}, 
//     // ]
//     // const requestBody = inputData.reduce((acc, { key, value }) => {
//     //     if (value) {
//     //         acc[key] = value;
//     //     }
//     //     return acc;
//     // }, {});
    
//     const requestBody = {};
//     if (name) {
//         requestBody.name = name;
//     }
//     if (email) {
//         requestBody.email = email;
//     }
//     if (phone) {
//         requestBody.phone = phone;
//     }

//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestBody)
//     }).then(response => {
//         console.log({response});
//         return response.json();
//     }).then(dataElem => {
//         const [container] = document.getElementsByClassName('container');
//         const markup = buildItemMarkup(dataElem);
//         container.innerHTML = markup;
//     });
// };
//
//
//
// 4. DELETE
// Видалимо дані про одного з користувачів
// function deleteDataForItem() {
//     const userId = (document.getElementById('user-id-input')).value;
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" }
//     }).then(response => {
//         console.log(response);
//         const [container] = document.getElementsByClassName('container');
//         if (!response.ok) {
//             container.innerHTML = 'Not Deleted';
//             return;
//         }
//         container.innerHTML = 'Deleted';
//     })
// }

