// 20:42 ПРОДОВЖУЄМО. ПЕРЕРВА.






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
// async function getUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log({
//         response,
//         data
//     })
// }
// getUsers();
// const foo = async () => {
//     await Promise.reject('Rejected');
//     return 'OK';
// }
// foo().then((value) => {
//     console.log('I AM EXECUTED');
//     console.log(value);
// });
// #1
// const foo = async () => {
//     // throw error
//     await Promise.reject('Rejected');
//     // return is never executed
//     return 'OK';
// }
// // error is not caught (no catch() block)
// foo().then(value => console.log(value)); // ERROR in console, code stopped executed
// #2
// const foo = async () => {
//     // throw error
//     await Promise.reject('Rejected');
//     // return is never executed
//     return 'OK';
// }
// // error thrown in foo will be handled in catch() block
// foo().then(value => console.log(value)).catch(error => console.log(error)); // STRING: Rejected
// #3
// const foo = async () => {
//     // promise is fullfilled but it's result is not returned
//     await Promise.resolve('Resolved');
//     return 'OK';
// }
// foo().then(value => console.log(value)) // STRING: OK
// #4 
// const foo = async () => {
//     return await Promise.resolve('Resolved');
// }
// foo().then(value => console.log(value)) // STRING: Resolved



// try {
//     // пробуємо виконати якийсь код в якому потенційно може бути помилка
// } catch(error) {
//     // ловимо помилку яка потенційно може бути в блоці try та обробляємо її
//     // помилка буде збережена в змінній error (назва може бути будь яка)
// } finally {
//     // код який виконається після того як відпрацює catch або try
// }
// foo() - code in try
// then - code executed after try catch
// catch - catch block


//
//
//
// 0.1 Порівняємо код написаний з промісами та з async/await
// function myFunctionWithPromises() {
//     // callApi() - doing request
//     return callApi()
//         // response.json() - parsing response
//         .then(response => response.json())
//         // processing data
//         .then(data => {
//             return processResult(data);
//         })
//         // returning data
//         .then((processedData) => {
//             return processedData;
//         })
//         // catching error
//         .catch(error => console.error(error));
// };
// async function myFunctionWithAsync() {
//     try {
//         // callApi() - doing request
//         const response = await callAPI();
//         // response.json() - parsing response
//         const data = await response.json();
//         // processing data
//         const processedData = await processResult(data);
//         // returning data
//         return processedData;
//     } catch (error) {
//         console.error(error);
//     }
// }

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

// async function testF() {
//     const options = {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" }
//     }
//     const response = await fetch(`http://localhost:3000/products?${params}`, options);
//     const data = await response.json();
//     return data;
// }
//
//
// 
// 1. Будемо переписувати всі завдання з минулих тем з використанням async/await

class HTTPServer {
    constructor(url) {
        // assigning url to url property of class instance
        this.url = url;
    }

    // params - url parameters for request (:?userId=10)
    async getData(id = '') {
        // building url
        const url = this.url + '/' + id;
        // building FETCH options
        const fetchRequestOptions = { method: "GET", headers: { "Content-Type": "application/json" }};
        return await this.#fetchData(url, fetchRequestOptions);
    }

    async postData(body) {
        // building FETCH options (with request body)
        const fetchRequestOptions = { 
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        };
        return await this.#fetchData(this.url, fetchRequestOptions);
    }

    async deleteData(id) {
        // building url with id that passed as parameter
        const url = this.url + '/' + id;
        // building FETCH options
        const fetchRequestOptions = { method: "DELETE", headers: { "Content-Type": "application/json" }};
        // getting response from server
        const response = await fetch(url, fetchRequestOptions);
        if (response.ok) {
            // if everything went fine - returning success
            return 'SUCCESS';
        } else {
            // if everything did NOT went fine - throwing error
            throw new Error('Error occurred while trying delete');
        }
    }

    async patchData(id, body) {
        // building url with id that passed as parameter
        const url = this.url + '/' + id;
        // building FETCH options (with request body)
        const fetchRequestOptions = { 
            method: "PATCH", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        };
        return await this.#fetchData(url, fetchRequestOptions);
    }

    async #fetchData(url, fetchRequestOptions) {
        // getting response from server
        const response = await fetch(url, fetchRequestOptions);
        // parsing response using .json()
        const data = await this.#parseResponse(response);
        return data;
    }

    async #parseResponse(response) {
        return await response.json();
    }
}

const HTTPServerBulder = new HTTPServer('https://jsonplaceholder.typicode.com/users');
// HTTPServerBulder.getData().then(data => console.log(data));
// HTTPServerBulder.postData({ name: 'Jake', age: 40 }).then(data => console.log(data));
// HTTPServerBulder.deleteData(7).then(data => console.log(data));
// HTTPServerBulder.patchData(7, {name: 'Jake'}).then(data => console.log(data));

async function displayUsersData() {
    try {
        // loading data
        const data = await HTTPServerBulder.getData();
        // getting container from HTML
        const container = document.getElementById('container');
        // building markup
        const markup = buildMarkup(data);
        // added markup into HTML
        container.innerHTML = markup;
    } catch(error) {
        console.error(error);
        // error output
    }
}

function buildMarkup (data) {
    // building all markup
    return `
        <table style="width:100%">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            ${(data.map(buildItemMarkup)).join('')}
        </table>
    `;
}

function buildItemMarkup ({ name, email, phone, website }) {
    // Building markup for ONE ROW
    return `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${website}</td>
        </tr>
    `;
}


// data.map(buildItemMarkup)
// =
// data.map(item => buildItemMarkup(item))
// [1,2,3,4]
// [1,2,3,4].join('') // "1234"



// function buildItemMarkup ({ name, email, phone, website }) {
//     const phoneForMarkup = phone ?? 'No phone number';
//     const emailForMarkup = email ?? 'No phone number';
//     const nameForMarkup = name ?? 'No phone number';
//     const websiteForMarkup = website ?? 'No phone number';
//     return `
//         <div>
//             <span>name: ${nameForMarkup} </span>
//             <span>email: ${emailForMarkup} </span>
//             <span>phone: ${phoneForMarkup} </span>
//             <span>website: ${websiteForMarkup} </span>
//         </div>
//     `;
// };




// function add(a, b) {
//     // #1
//     // const sum = a + b;
//     // return sum;

//     // #2
//     // return a + b;

//     a + b;
//     return 'test';
// }

// const add2 = (a, b) => a + b; 
// // =
// function add2(a, b) {
//     return a + b;
// }


//
//
//
// 2. Розглянемо приклад з декількома одночасними запитами і Promise.all
//
//
//